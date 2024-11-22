# NodeJs Todo Backend

Get todo list:
--------------
url  :  http://localhost:8080/api/todo?page=1&limit=2
type :  get


Add todo:
---------
url  :  http://localhost:8080/api/todo
type :  post
params:
{
    "toDo":"study commerce",
    "status" : 1
}


Update status:
--------------
url  :  http://localhost:8080/api/todo/update-status
type :  post
params:
{
    "id":"6592c3e47f8fcb037e3f6e1b",
    "status" : 2
}
