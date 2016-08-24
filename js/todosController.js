angular.module('todosApp')
  .controller('TodosController', TodosController)

function TodosController($scope, $log) {
  $scope.add = addTodo //just attaching it, don't need to call it
  $scope.newTodo = {todo: "", image: ""}

  $scope.all = [
    {todo: "Pair Program Exercise", done: false, image: "http://placekitten.com/50/50"},
    {todo: "Solo Program Exercise", done: true, image: "http://placekitten.com/51/51"}

    ]

  $log.log($scope.all);

  function addTodo() {
    $scope.all.push({todo: $scope.newTodo.todo, image: $scope.newTodo.image})
    $scope.newTodo = {todo: "", image: ""}
  }
}
