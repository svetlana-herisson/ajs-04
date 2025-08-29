import loadUser from "../loadUser.js";
import { httpGet } from "..http.js";

jest.mock("../http");

beforeEach(() => {
    jest.resetAllMocks();
}); // beforeEach — функция в фреймворке Jest (JavaScript), 
// которая выполняет указанную функцию перед каждым тестом в 
// рамках её области видимости. Её основная цель — настроить 
// необходимую среду или состояние для тестов.
