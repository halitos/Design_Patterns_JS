# Singleton Pattern

The singleton pattern is a creational design pattern that restricts the instantiation of a class to a single object. It creates a new instance of the class if one doesn’t exist and if existing already it returns a reference to it. 

An example would be a single database object shared by different parts of the application. There is no need to create a new instance of a database when one is already existing.

The main drawback of the singleton pattern is the difficulty testing it.