library(shiny)

towns<-commune$COMMUNE_CODE
names(towns)<-commune$COMMUNE_NOM

# Define UI for random distribution application 
fluidPage(
  
  # Application title
  titlePanel("SuperBetter Town"),
  
  # Sidebar with controls to select the random distribution type
  # and number of observations to generate. Note the use of the
  # br() element to introduce extra vertical spacing
  sidebarLayout(
    sidebarPanel(
      selectInput("commune", "Commune:", 
                  choices=towns),
      br(),
      sliderInput("n", 
                  "Avis:", 
                  value = 3,
                  min = 1, 
                  max = 5),
      br(),
      textAreaInput("suggestion", "Suggestion", "", width = "400px"),
      submitButton("Submit", icon("submit"))
    ),
    
    # Show a tabset that includes a plot, summary, and table view
    # of the generated distribution
    mainPanel(
      tabsetPanel(type = "tabs",
                  tabPanel("Ma Commune", tableOutput("table")),
                  tabPanel("Random Forest", plotOutput("importance")),
                  tabPanel("Word Cloud", plotOutput("cloud")),
                  tabPanel("Emploi", plotOutput("plot_emploi")),
                  tabPanel("Victimes de la route", plotOutput("plot_victime")),
                  tabPanel("Accidents domestiques", plotOutput("plot_accident"))
      )
    )
  )
)