print("hi there Sai Baba")

myFirstVar = 1
print(myFirstVar)

myFirstVar = 'casting'
print(myFirstVar)

mySecondVar = 'Hellove Sai Sweety'
print(mySecondVar[2:6])

myThirdVar = ' Something Sweety '
print(myThirdVar.strip())

print(myThirdVar.replace('g','s'))

# Input from the user
print('Enter your name please?')
x = input()
print("Hi",x)

# List - Changeable. Square brackets.
listExample = ["first","second","third","fourth"]

# Tuple - Unchangeable. Round brackets.
tupleExample = ("apple", "banana", "cherry")
for x in tupleExample:
    print("For Loop",x)

# Case sensitive
if "apple" in tupleExample:
    print("Yes apple is there")

print("apple" in tupleExample)

# Sets - Changeable , Unindexed and Curly brackets
setExample = {"apple", "banana", "cherry"}
setExample.add("someee")
print(setExample)

setExample.update(["orange", "mango", "grapes"])
print(setExample)

# Dictionary - Changeable, Indexed - Like Objects - Same functionalities as object
dictionaryExample =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(dictionaryExample)

for x in dictionaryExample.values():
  print(x)

a = 4
b = 4

if a > b:
    print("a is greater than b")
elif b > a:
    print("b is greater than a")
else:
    print("a and b are equal")

# Special Cases
if a > b: print("a is greater than b")
print("A") if a > b else print("B")
print("A") if a > b else print("=") if a == b else print("B")

a = 7
b = 4
c = 8
if a > b and c > a:
  print("Both conditions are True")

# Special for loop
for x in listExample:
    if x == "first":
        print("yassss")

# The else keyword in a for loop specifies a block of code to be executed when the loop is finished:
for x in range(6):
  print(x)
else:
  print("Finally finished!")

# Multiple Nested Loops
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)

#Custom Functions
def my_function(name = 'Someone'):
    print("Function called Mrs.",name)
my_function("Meghana")

# Lambda Functions
    # A lambda function is a small anonymous function. A lambda function can take any number of arguments, but can only have one expression.
x = lambda a : a + 10
print(x(5))

x = lambda a, b : a * b
print(x(5, 6))

# Class
class CustomClass:
    x = 10

    # Object
p1 = CustomClass()
print(p1.x)

# Init Function - Like constructor
class Person:
    def __init__(self,name,age):

        # The self parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class.It does not have to be named self , you can call it whatever you like, but it has to be the first parameter of any function in the class:
        self.name = name
        self.age = age

    def printVal(other):
        print("Name is",other.name)
    
p2 = Person("Manju",28)
print(p2.name)
print(p2.age)
p2.printVal()

# Inheritance
class Child(Person):
    # Use the pass keyword when you do not want to add any other properties or methods to the class.
    pass

childObj = Child("Child",30)
childObj.printVal()

# Module. Save code in filename.py. import filename
import secondary as temp

print(temp.personDictionary)
print(temp.printVal())

# Certain data import only
from secondary import personDictionary
personDictionary["age"]