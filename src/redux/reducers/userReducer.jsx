import { ADD_POST, REMOVE_POST, UPDATE_POST } from "../../actions/index";

const initialState = [
     {
     id:1,
     fname:'Ash',
     lname: 'Tadevosyan',
     email: 'ash.tadevosyan.2020@gmail.com'
   },
   {
     id:2,
     fname:'Tik',
     lname: 'Gevorgyan',
     email: 'tik.gevorgyan@gmail.com'
   }
  
  ];

export default function Post(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          id: action.id,
          fname: action.fname,
          lname: action.lname,
          email: action.email,
          number: action.number,
          birth: action.birth
        }
      ];
    case REMOVE_POST:
      return state.filter(({ id }) => id !== action.id);
    case UPDATE_POST:
      return state.map(
        post => (post.id === action.id ? { ...post, ...action } : post)
      );
    default:
      return state;
  }
}
