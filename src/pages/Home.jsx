import { useEffect, useState } from "react";
import { Box, Flex, Button, Input, Checkbox, SimpleGrid, Select,} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos, postTodoRequest } from "../redux/Todo/actions";
import TodoList from "../components/TodoList";
import { loginUnsuccessful } from "../redux/LoginRedux/actions";

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [sortingTodo, setSortingTodo] = useState("all");

  const [newTodoObject, setNewTodoObject] = useState({
    id: Date.now(),
    title: "",
    status: false,
  });

  const handleNewTodoSubmition = (e) => {
    e.preventDefault();
    postTodoRequest(newTodoObject);
    dispatch(getAllTodos);
    setNewTodoObject({
      id: Date.now(),
      title: "",
      status: false,
    });
  };

  const sortingTodos = () => {
    if (sortingTodo === "Completed") {
      return todos.filter((todo) => todo.status === true);
    } else if (sortingTodo === "Pending") {
      return todos.filter((todo) => todo.status === false);
    } else {
      return todos;
    }
  };

  const handleLogout = () => {
    dispatch(loginUnsuccessful());
  };

  useEffect(() => {
    dispatch(getAllTodos);
  }, [newTodoObject]);

  return (
    <Box>
      <Button position="absolute" right={10} colorScheme="blue" top={5} onClick={handleLogout}>Logout</Button>
      <Box p={10} pt={2}>
        <form onSubmit={handleNewTodoSubmition}>
          <Flex justify="center" align="center" gap={4} >
            <Input
              placeholder="Enter Todo"
              value={newTodoObject.title}
              w="20%"
              onChange={(e) =>
                setNewTodoObject({ ...newTodoObject, title: e.target.value })
              }
              required
            />
            <Checkbox
              isChecked={newTodoObject.status}
              onChange={(e) =>
                setNewTodoObject({ ...newTodoObject, status: e.target.checked })
              }
            >
              Status
            </Checkbox>
            <Button type="submit" colorScheme="teal">Add Todo</Button>
            <Box>
              <Select onChange={(e) => setSortingTodo(e.target.value)}>
                <option value="all" style={{ color: "black" }}>Filter By</option>
                <option style={{ color: "black" }} value="Completed">Completed</option>
                <option style={{ color: "black" }} value="Pending">Pending</option>
              </Select>
             </Box>
          </Flex>
        </form>
      </Box>
      <SimpleGrid columns={1} w="50%" gap={10} m="auto" p={10}>
        {sortingTodos().map((todo) => (
          <TodoList {...todo} key={todo.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
