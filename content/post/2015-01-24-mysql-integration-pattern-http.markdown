---
layout: post
title: "Mysql integration pattern - HTTP"
date: 2015-01-24 14:20:53 +0000
comments: true
Draft: true
description: Mysql integration pattern for legacy systems using HTTP
categories: [Mysql, Integration, Http]
---

This week i came across the problem of replacing an legacy PHP/Mysql System with a new system. 
The goal is to replace the old system feature by feature in continous integration fashion. 
Doing this we get the following benefits:

    -Test the new the system with real data
    -Faster feedback loop
   
<p style="text-align: center" >
{% plantuml %}

participant "Web Application" as WebApp
participant "Mysql Master" as Mysql


WebApp -> Mysql: SQL Query
activate Mysql

WebApp <-- Mysql: results
deactivate Mysql


{% endplantuml %}
</p>

The problem is that there is no simple/succinct way to replace all the queries from the old 
system with queries/calls to the new system.


The first idea that came into my mind was to replicate the data from the old system to a slave node and 
write a Mysql plugin to insert that data into the new system. 

Fortunatily  someone had a similar idea and created [mysql-udf-http](https://code.google.com/p/mysql-udf-http), an mysql UDF extension that handle HTTP requets.



{% plantuml %}

participant "Web Application" as WebApp
participant "Mysql Master" as Mysql
participant "Mysql Slave" as Slave
participant "New System" as System


WebApp -> Mysql: SQL Query
activate Mysql

Mysql -> Slave: Replicate

Slave -> System: POST /api/document
activate System
note right
    the respective trigger 
    will call the enpoint to create or update 
    a document in the new system
end note

Slave <-- System
deactivate System



WebApp <-- Mysql: results
deactivate Mysql


{% endplantuml %}





 
