import logo from './logo.svg';
import './App.css';
import Students from './Students/Students';
import { useState } from 'react'

function App() {
  let [state, setState] = useState({
    Students:
    [
        {
          name: 'Nevin',
          bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
          scores: []
        },
        {
          name: 'Joel',
          bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
          scores: []
        },
        {
          name: 'Mojo',
          bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
          scores: []
        }
      ,
   ] 
  }
  )
  return (
    <div className="App">
      <Students
      students={state.Students} 
      />
    </div>
  )
}

export default App;
