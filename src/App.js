import React, {Component} from 'react';
import TodoListTemplate from './Components/TodoListTemplate';
import Form from './Components/Form';

class App extends Component{
  render(){
    return (
      <div>
        <TodoListTemplate form={<Form/>}>
          템플릿 완성
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
