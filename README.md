# CarClient
Scenario:
Our company has a number of connected vehicles that belongs to a number of customers.
We have a need to be able to view the status of the connection among these vehicles on a monitoring display.

The vehicles send the status of the connection one time per minute.
The status can be compared with a ping (network trace); no request from the vehicle means no connection.

Task:
Your task will be to create a data store that keeps these vehicles with their status and the customers who own them, as well as a GUI (preferably web-based) that displays the status.
How the GUI is designed is up to you, as well as how you chose to implement the features and use suitable technologies.

Obviously, for this task, there are no real vehicles available that can respond to your "ping" request.
This can either be solved by using static values or ​​by creating a separate machinery that returns random fake status.

Requirement:
An overview of all vehicles should be visible on one page (full-screen display), together with their status.
It should be able to filter, to only show vehicles for a specific customer.
It should be able to filter, to only show vehicles that have a specific status.

Besides the requirements, it is up to you what you want to focus on, see it as an opportunity to highlight your strengths.
Do not put too much time on stuff you do not feel adds value, focus on what you feel you would contribute with.
Also, it's good if you show some examples of how you would assure the quality of the code you wrote.

Data:
Below you have all customers from the system; their addresses and the vehicles they own.

Save the information that you think are needed to solve the task above.
If you feel that databases and/or database design isn't something you are comfortable with, you're welcome to store the information in an object in the code.

|-----------------------------------|
| Kalles Grustransporter AB         |
| Cementvägen 8, 111 11 Södertälje  |
|-----------------------------------|
| VIN (VehicleId)       Reg. nr.    |
|-----------------------------------|
| YS2R4X20005399401     ABC123      |
| VLUR4X20009093588     DEF456      |
| VLUR4X20009048066     GHI789      |
|-----------------------------------|

|-----------------------------------|
| Johans Bulk AB                    |
| Balkvägen 12, 222 22 Stockholm    |
|-----------------------------------|
| VIN (VehicleId)       Reg. nr.    |
|-----------------------------------|
| YS2R4X20005388011     JKL012      |
| YS2R4X20005387949     MNO345      |
------------------------------------|

|-----------------------------------|
| Haralds Värdetransporter AB       |
| Budgetvägen 1, 333 33 Uppsala     |
|-----------------------------------|
| VIN (VehicleId)       Reg. nr.    |
|-----------------------------------|
| YS2R4X20005387765     PQR678      |
| YS2R4X20005387055     STU901      |
|-----------------------------------|



Car instruktioner
Ambitionen har varit att göra Car-programmet självinstruerande.
 
Car består av två program:
CarAPI är ett ASP.NET Web  API  för läsning och skrivning i Sqlite-databasen Car.db
som ligger på folder ~/App_Data. Programmet baseras på .NET Core 2.0.0 och använder 
ipnummer: http://localhost:54411/. 

Koden finns på: 
https://github.com/gunnarsireus/CarAPI

CarClient är användargränssnittet skrivet i C# MVC baserat på .NET Core 2.0.0. 
Här finns också användardatabasen AspNet.db, (Sqlite) där användarna registreras. 
Här används bl.a. klasser från  Microsoft.AspNetCore.Identity.
Koden finns på 
https://github.com/gunnarsireus/CarClient

Enhetstester
I projektet CarClient.Tests och CarAPI.Test finns tester som testar Controllers. 
Testerna är implementerade med xUnit och Moq. Testerna körs genom att högerklicka i koden 
och välja ”Run tests”. Observera att CarAPI måste vara igång för att testerna skall 
kunna köras felfritt. Testerna är inte alls fullständiga, mer att betrakta som skisser på hur man skulle kunna utforma bra enhetstester.

Köra programmet
Hämta koden från github, öppna med Visual Studio 2017. När koden är öppnad tryck F5 för att 
köra i debuggläge. Starta först CarAPI. En browser öppnas och Swagger startar.

Därefter tryck F5 i CarClient. När programmet har öppnat, registrera dig som användare 
av Car. Nu kan du börja skapa företag och registrera fordon på företag. Fordonen har status "Online" eller "Offline" och status ändras slumpmässigt 
ungefär var 10e sekund. Ändring av status sker med hjälp av Javascript som exekverar i browsern.

