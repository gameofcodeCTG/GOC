library(shiny)
library(ggplot2)
library(randomForest)
library(wordcloud)
library(tm)

load(file="./data/commune.rda")
load(file="./data/all.rda")
load(file="./data/avis.rda")
load(file="./data/accident.rda")
load(file="./data/couverture.rda")
load(file="./data/emploi.rda")
load(file="./data/emploi_histo.rda")
load(file="./data/population.rda")
load(file="./data/pyramide.rda")
load(file="./data/victime_route.rda")

suggestion <- c("je suis fatigue de coder","moi aussi je suis fatigue")

Unaccent <- function(text) {
  text <- gsub("['`^~\"]", " ", text)
  text <- iconv(text, to="ASCII//TRANSLIT//IGNORE")
  text <- gsub("['`^~\"]", "", text)
  return(text)
}


function(input, output) {

  id <- reactive({
    avis<<-rbind(avis,c(input$commune,"user@gmail.com",input$n))
    suggestion <<- as.vector(c(suggestion,input$suggestion))
    print(suggestion)
    input$commune
  })
  
  output$importance <- renderPlot({
    
    test <- merge(x=all,y=avis,by="COMMUNE_CODE",all.x = FALSE)
    test$UHD1<-as.numeric(test$UHD1)
    test$UHD2<-as.numeric(test$UHD2)
    test$UHD3<-as.numeric(test$UHD3)
    rf <- randomForest(subset(test,select = -c(COMMUNE_CODE,COMMUNE_NOM,avis,mail)), as.factor(test$avis), ntree=100, importance=TRUE)
    imp <- importance(rf, type=1)
    featureImportance <- data.frame(Feature=row.names(imp), Importance=imp[,1])
    featureImportance <- featureImportance[order(-featureImportance$Importance),]
   
     ggplot(featureImportance, aes(x=reorder(Feature, Importance), y=Importance)) +
      geom_bar(stat="identity", fill="#53cfff") +
      coord_flip() + 
      theme_light(base_size=20) +
      xlab("") +
      ylab("Importance") + 
      theme(plot.title=element_text(size=18))
    
  })
  
  
  output$plot_emploi <- renderPlot({
    emplois <- c(emploi_histo[emploi_histo$COMMUNE_CODE==id(),]$EMPLOI_2009_03_31,emploi_histo[emploi_histo$COMMUNE_CODE==id(),]$EMPLOI_2010_03_31,
                 emploi_histo[emploi_histo$COMMUNE_CODE==id(),]$EMPLOI_2011_03_31,emploi_histo[emploi_histo$COMMUNE_CODE==id(),]$EMPLOI_2012_03_30,
                 emploi_histo[emploi_histo$COMMUNE_CODE==id(),]$EMPLOI_2013_03_29,emploi_histo[emploi_histo$COMMUNE_CODE==id(),]$EMPLOI_2014_03_31,
                 emploi_histo[emploi_histo$COMMUNE_CODE==id(),]$EMPLOI_2015_03_31,emploi_histo[emploi_histo$COMMUNE_CODE==id(),]$EMPLOI_2016_03_31)
    years<-c(2009:2016)
    
    df<-data.frame(emplois,years)
    
    ggplot(data=df,aes(x=years, y=emplois)) +
      geom_bar(stat="identity", fill="#53cfff") +
      theme_light(base_size=20) +
      xlab("") +
      ylab("Emploi") + 
      theme(plot.title=element_text(size=18))
  })

  output$cloud <- renderPlot({
    
    text <- lapply(as.vector(suggestion),Unaccent)
    
    myCorpus <- Corpus(VectorSource(text))
    myCorpus <- tm_map(myCorpus, tolower)
    myCorpus <- tm_map(myCorpus, removePunctuation)
    myCorpus <- tm_map(myCorpus, removeNumbers)
    myCorpus <- tm_map(myCorpus, removeWords, stopwords('french'))
    myCorpus <- tm_map(myCorpus , PlainTextDocument)
    myDtm <- TermDocumentMatrix(myCorpus)
    m <- as.matrix(myDtm)
    v <- sort(rowSums(m), decreasing=TRUE)
    d <- data.frame(word = names(v),freq=v)
    wordcloud(d$word,d$freq,min.freq=1,max.words=100, random.order=FALSE, colors=brewer.pal(8, "Dark2"))

      })
  

  output$plot_victime <- renderPlot({
    victimes <- c(accident[accident$COMMUNE_CODE==id(),]$TOTAL_DES_VICTIMES_2005,accident[accident$COMMUNE_CODE==id(),]$TOTAL_DES_VICTIMES_2006,
                  accident[accident$COMMUNE_CODE==id(),]$TOTAL_DES_VICTIMES_2007,accident[accident$COMMUNE_CODE==id(),]$TOTAL_DES_VICTIMES_2008,
                  accident[accident$COMMUNE_CODE==id(),]$TOTAL_DES_VICTIMES_2009,accident[accident$COMMUNE_CODE==id(),]$TOTAL_DES_VICTIMES_2010,
                  accident[accident$COMMUNE_CODE==id(),]$TOTAL_DES_VICTIMES_2011,accident[accident$COMMUNE_CODE==id(),]$TOTAL_DES_VICTIMES_2012,
                  accident[accident$COMMUNE_CODE==id(),]$TOTAL_DES_VICTIMES_2013,accident[accident$COMMUNE_CODE==id(),]$TOTAL_DES_VICTIMES_2014,
                  accident[accident$COMMUNE_CODE==id(),]$TOTAL_DES_VICTIMES_2015)
    years<-c(2005:2015)
    
    df<-data.frame(victimes,years)
    
    ggplot(data=df,aes(x=years, y=victimes)) +
      geom_bar(stat="identity", fill="#53cfff") +
      theme_light(base_size=20) +
      xlab("") +
      ylab("Victimes de la route") + 
      theme(plot.title=element_text(size=18))
  })
  

  output$plot_accident <- renderPlot({
    accidents <- c(accident[accident$COMMUNE_CODE==id(),]$ACCIDENTS_CORPORELS_2005,accident[accident$COMMUNE_CODE==id(),]$ACCIDENTS_CORPORELS_2006,
                   accident[accident$COMMUNE_CODE==id(),]$ACCIDENTS_CORPORELS_2007,accident[accident$COMMUNE_CODE==id(),]$ACCIDENTS_CORPORELS_2008,
                   accident[accident$COMMUNE_CODE==id(),]$ACCIDENTS_CORPORELS_2009,accident[accident$COMMUNE_CODE==id(),]$ACCIDENTS_CORPORELS_2010,
                   accident[accident$COMMUNE_CODE==id(),]$ACCIDENTS_CORPORELS_2011,accident[accident$COMMUNE_CODE==id(),]$ACCIDENTS_CORPORELS_2012,
                   accident[accident$COMMUNE_CODE==id(),]$ACCIDENTS_CORPORELS_2013,accident[accident$COMMUNE_CODE==id(),]$ACCIDENTS_CORPORELS_2014,
                   accident[accident$COMMUNE_CODE==id(),]$ACCIDENTS_CORPORELS_2015)
    years<-c(2005:2015)
    
    df<-data.frame(accidents,years)
    
    ggplot(data=df,aes(x=years, y=accidents)) +
      geom_bar(stat="identity", fill="#53cfff") +
      theme_light(base_size=20) +
      xlab("") +
      ylab("Accidents corporels") + 
      theme(plot.title=element_text(size=18))
  })
  
    
  # Generate a summary of the data
  output$table <- renderTable({
    data.frame(Criteria=colnames(all),Values=t(all[all$COMMUNE_CODE==id(),]))
  })
  
}