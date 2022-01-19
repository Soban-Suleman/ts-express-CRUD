import { Request, Response } from "express";
import Todos from "../models/todo.model";

export const getAllTodos = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const todos = await Todos.find();
    return res.status(200).json({ results: todos.length, todos });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const createTodo = async (req: Request, res: Response): Promise<any> => {
  try {
    const { todo: name, due } = req.body;
    console.log(req?.body);
    const todo = await Todos.create({ todo: name, due: new Date(due) });
    res.status(200).json({ todo });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateTodo = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req?.params;
    const todo = await Todos.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res.status(200).json({ message: "Updated", todo });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteTodo = async (req: Request, res: Response): Promise<any> => {
  try {
    await Todos.findOneAndDelete({ _id: req?.params?.id });
    res.status(300).json({ message: "Deleted" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
