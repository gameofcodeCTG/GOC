library(randomForest)
library(mongolite)
library(jsonlite)

setwd("~/Rprog/hackathon")
dir <- "C:/Users/yann/Documents/Rprog/hackathon/data/"

####
#  load avis

nbr <- 10
avis <- data.frame(COMMUNE_CODE=rep(commune$COMMUNE_CODE,times=nbr),
                   mail=rep(c("user@gmail.com"),times=105*nbr),
                   avis=sample(1:5, 105*nbr, replace=T))

####
#  load all data about town

c = mongo(collection = "all", db = "superdb")
all <- c$find()

####
#  perform randomForest with evaluation

test <- merge(x=all,y=avis,by="COMMUNE_CODE",all.x = FALSE)

rf <- randomForest(subset(test,select = -c(COMMUNE_CODE,COMMUNE_NOM,avis)), as.factor(test$avis), ntree=100, importance=TRUE)
imp <- importance(rf, type=1)
featureImportance <- data.frame(Feature=row.names(imp), Importance=imp[,1])
featureImportance <- featureImportance[order(-featureImportance$Importance),]

####
#  save importance i.e. most important criteria
c = mongo(collection = "featureImportance", db = "superdb")
if (c$count()>0) c$drop()
c$insert(featureImportance)

