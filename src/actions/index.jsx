export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST = "UPDATE_POST";

let nextId = 3;

export function addPost(fname, lname, email,number,birth) {
  return {
    type: ADD_POST,
    id: nextId++,
    fname,
    lname,
    email,
    number,
    birth
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id
  };
}

export function updatePost(id, fname, lname, email,number,birth) {
  return {
    type: UPDATE_POST,
    id,
    fname,
    lname,
    email,
    number,
    birth
  };
}
