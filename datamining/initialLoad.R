
setwd("~/Rprog/hackathon")
dir <- "C:/Users/yann/Documents/Rprog/hackathon/data/"

####
# General Function 

strip <- function(x){
  z <- gsub("[^0-9,.]", "", x)
  z <- gsub("\\.", "", z)
  gsub(",", ".", z)
}

####
# Historical Employment
# Load "EmploiTotalCommune"
emploi_histo <- read.csv(paste0(dir,"emploiCommuneRes.csv"), header=TRUE, sep=";",fileEncoding="latin1",quote="\"",allowEscapes=TRUE)
emploi_histo$EMPLOI_2009_03_31 <- as.numeric(strip(emploi_histo$EMPLOI_2009_03_31))
emploi_histo$EMPLOI_2010_03_31 <- as.numeric(strip(emploi_histo$EMPLOI_2010_03_31))
emploi_histo$EMPLOI_2011_03_31 <- as.numeric(strip(emploi_histo$EMPLOI_2011_03_31))
emploi_histo$EMPLOI_2012_03_30 <- as.numeric(strip(emploi_histo$EMPLOI_2012_03_30))
emploi_histo$EMPLOI_2013_03_29 <- as.numeric(strip(emploi_histo$EMPLOI_2013_03_29))
emploi_histo$EMPLOI_2014_03_31 <- as.numeric(strip(emploi_histo$EMPLOI_2014_03_31))
emploi_histo$EMPLOI_2015_03_31 <- as.numeric(strip(emploi_histo$EMPLOI_2015_03_31))
emploi_histo$EMPLOI_2016_03_31 <- as.numeric(strip(emploi_histo$EMPLOI_2016_03_31))


# Accident trend
EMPLOI_TREND <- NULL

for (i in (1:nrow(emploi_histo))) {
  emplois <- c(emploi_histo[i,]$EMPLOI_2009_03_31,emploi_histo[i,]$EMPLOI_2010_03_31,
                 emploi_histo[i,]$EMPLOI_2011_03_31,emploi_histo[i,]$EMPLOI_2012_03_30,
                 emploi_histo[i,]$EMPLOI_2013_03_29,emploi_histo[i,]$EMPLOI_2014_03_31,
                 emploi_histo[i,]$EMPLOI_2015_03_31,emploi_histo[i,]$EMPLOI_2016_03_31)
  years<-c(2009:2016)
  fit <- as.numeric(lm(emplois~years)$coefficients[2])
  EMPLOI_TREND <-c(EMPLOI_TREND,fit)
}

emploi_histo <- cbind(emploi_histo,EMPLOI_TREND)

####
# Population 2016
# Load "rnpp_population_commune.csv"
population <- read.csv(paste0(dir,"rnpp_population_commune.csv"), header=TRUE, sep=",",fileEncoding="latin1",quote="\"",allowEscapes=TRUE)
population$TOTALE <- population$FEMMES_MINEURES+population$HOMMES_MINEURS+population$FEMMES_MAJEURES+population$HOMMES_MAJEURS

####
# couverture Internet ultra-haut débit
# Load "couverture_DEC_2016.csv"
couverture <- read.csv(paste0(dir,"couverture_DEC_2016.csv"), header=TRUE, sep=";",fileEncoding="latin1",quote="\"",allowEscapes=TRUE)
couverture$UHD1<-as.numeric(couverture$UHD1)
couverture$UHD2<-as.numeric(couverture$UHD2)
couverture$UHD3<-as.numeric(couverture$UHD3)
####
# Load "rnrpp_pyramide_age_commune.csv"
pyramide <- read.csv(paste0(dir,"rnrpp_pyramide_age_commune.csv"), header=TRUE, sep=",",fileEncoding="latin1",quote="\"",allowEscapes=TRUE)

####
# Accidents_corporels_et_victimes_de_la_circulation_routiere_par_canton_et_commune_2005_-_2015
# Load "Accidents.csv"
accident <- read.csv(paste0(dir,"Accidents.csv"), header=TRUE, sep=";",fileEncoding="latin1",quote="\"",allowEscapes=TRUE,na.strings = "-")

# Accident trend
ACCIDENT_TREND <- NULL

for (i in (1:nrow(accident))) {
  accidents <- c(accident[i,]$ACCIDENTS_CORPORELS_2005,accident[i,]$ACCIDENTS_CORPORELS_2006,
                 accident[i,]$ACCIDENTS_CORPORELS_2007,accident[i,]$ACCIDENTS_CORPORELS_2008,
                 accident[i,]$ACCIDENTS_CORPORELS_2009,accident[i,]$ACCIDENTS_CORPORELS_2010,
                 accident[i,]$ACCIDENTS_CORPORELS_2011,accident[i,]$ACCIDENTS_CORPORELS_2012,
                 accident[i,]$ACCIDENTS_CORPORELS_2013,accident[i,]$ACCIDENTS_CORPORELS_2014,
                 accident[i,]$ACCIDENTS_CORPORELS_2015)
  years<-c(2005:2015)
  fit <- as.numeric(lm(accidents~years)$coefficients[2])
  ACCIDENT_TREND <-c(ACCIDENT_TREND,fit)
}
accident <- cbind(accident,ACCIDENT_TREND)

# Victime trend
VICTIME_TREND <- NULL
for (i in (1:nrow(accident))) {
  victimes <- c(accident[i,]$TOTAL_DES_VICTIMES_2005,accident[i,]$TOTAL_DES_VICTIMES_2006,
                 accident[i,]$TOTAL_DES_VICTIMES_2007,accident[i,]$TOTAL_DES_VICTIMES_2008,
                 accident[i,]$TOTAL_DES_VICTIMES_2009,accident[i,]$TOTAL_DES_VICTIMES_2010,
                 accident[i,]$TOTAL_DES_VICTIMES_2011,accident[i,]$TOTAL_DES_VICTIMES_2012,
                 accident[i,]$TOTAL_DES_VICTIMES_2013,accident[i,]$TOTAL_DES_VICTIMES_2014,
                 accident[i,]$TOTAL_DES_VICTIMES_2015)
  years<-c(2005:2015)
  fit <- as.numeric(lm(victimes~years)$coefficients[2])
  VICTIME_TREND <-c(VICTIME_TREND,fit)
}
accident <- cbind(accident,VICTIME_TREND)

accident_domestique <- subset(accident, select =c(COMMUNE_CODE,COMMUNE_NOM,ACCIDENTS_CORPORELS_2005,ACCIDENTS_CORPORELS_2006,ACCIDENTS_CORPORELS_2007,ACCIDENTS_CORPORELS_2008,
                                                  ACCIDENTS_CORPORELS_2009,ACCIDENTS_CORPORELS_2010,ACCIDENTS_CORPORELS_2011,ACCIDENTS_CORPORELS_2012,
                                                  ACCIDENTS_CORPORELS_2013,ACCIDENTS_CORPORELS_2014,ACCIDENTS_CORPORELS_2015,ACCIDENT_TREND))
victime_route <- subset(accident, select =c(COMMUNE_CODE,COMMUNE_NOM,TOTAL_DES_VICTIMES_2005,TOTAL_DES_VICTIMES_2006,TOTAL_DES_VICTIMES_2007,TOTAL_DES_VICTIMES_2008,
                                                  TOTAL_DES_VICTIMES_2009,TOTAL_DES_VICTIMES_2010,TOTAL_DES_VICTIMES_2011,TOTAL_DES_VICTIMES_2012,
                                                  TOTAL_DES_VICTIMES_2013,TOTAL_DES_VICTIMES_2014,TOTAL_DES_VICTIMES_2015,VICTIME_TREND))
####
# join emploi & population 2016 

emploi <- merge(x=emploi_histo,y=population,by="COMMUNE_CODE",all.x = TRUE)
emploi$PERCENT_EMPLOI_2016 = round(emploi$EMPLOI_2016_03_31/emploi$TOTALE,2)
emploi <- subset(emploi,select = c(COMMUNE_CODE, COMMUNE_NOM.x,PERCENT_EMPLOI_2016,EMPLOI_2016_03_31,TOTALE,EMPLOI_TREND))
colnames(emploi)[colnames(emploi)=="COMMUNE_NOM.x"] <- "COMMUNE_NOM"


####
# COMMUNE LIST 
commune <- subset(emploi,select = c(COMMUNE_CODE, COMMUNE_NOM))

####
# join all 

all <- merge(x=emploi,y=couverture,by="COMMUNE_CODE",all.x = TRUE)
all <- subset(all,select = -c(COMMUNE_NOM.y,X))
colnames(all)[colnames(all)=="COMMUNE_NOM.x"] <- "COMMUNE_NOM"

all <- merge(x=all,y=accident_domestique,by="COMMUNE_CODE",all.x = TRUE)
all <- subset(all,select = -c(COMMUNE_NOM.y,ACCIDENTS_CORPORELS_2005,ACCIDENTS_CORPORELS_2006,ACCIDENTS_CORPORELS_2007,ACCIDENTS_CORPORELS_2008,
                              ACCIDENTS_CORPORELS_2009,ACCIDENTS_CORPORELS_2010,ACCIDENTS_CORPORELS_2011,ACCIDENTS_CORPORELS_2012,
                              ACCIDENTS_CORPORELS_2013,ACCIDENTS_CORPORELS_2014,ACCIDENTS_CORPORELS_2015))
colnames(all)[colnames(all)=="COMMUNE_NOM.x"] <- "COMMUNE_NOM"

all <- merge(x=all,y=victime_route,by="COMMUNE_CODE",all.x = TRUE)
all <- subset(all,select = -c(COMMUNE_NOM.y,TOTAL_DES_VICTIMES_2005,TOTAL_DES_VICTIMES_2006,TOTAL_DES_VICTIMES_2007,TOTAL_DES_VICTIMES_2008,
                              TOTAL_DES_VICTIMES_2009,TOTAL_DES_VICTIMES_2010,TOTAL_DES_VICTIMES_2011,TOTAL_DES_VICTIMES_2012,
                              TOTAL_DES_VICTIMES_2013,TOTAL_DES_VICTIMES_2014,TOTAL_DES_VICTIMES_2015))
colnames(all)[colnames(all)=="COMMUNE_NOM.x"] <- "COMMUNE_NOM"

####
# load mongoDB with collection

library(mongolite)
library(jsonlite)

c = mongo(collection = "population", db = "superdb")
if (c$count()>0) c$drop()
c$insert(population)

c = mongo(collection = "couverture", db = "superdb")
if (c$count()>0) c$drop()
c$insert(couverture)

c = mongo(collection = "pyramide", db = "superdb")
if (c$count()>0) c$drop()
c$insert(pyramide)

c = mongo(collection = "emploi", db = "superdb")
if (c$count()>0) c$drop()
c$insert(emploi)

c = mongo(collection = "emploi_histo", db = "superdb")
if (c$count()>0) c$drop()
c$insert(emploi_histo)

c = mongo(collection = "victime_route", db = "superdb")
if (c$count()>0) c$drop()
c$insert(victime_route)

c = mongo(collection = "accident_domestique", db = "superdb")
if (c$count()>0) c$drop()
c$insert(accident_domestique)

c = mongo(collection = "commune", db = "superdb")
if (c$count()>0) c$drop()
c$insert(commune)

c = mongo(collection = "all", db = "superdb")
if (c$count()>0) c$drop()
c$insert(all)

save(commune,file="commune.rda")
save(avis,file="avis.rda")
save(couverture,file="couverture.rda")
save(emploi,file="emploi.rda")
save(emploi_histo,file="emploi_histo.rda")
save(population,file="population.rda")
save(pyramide,file="pyramide.rda")
save(victime_route,file="victime_route.rda")
save(accident,file="accident.rda")


