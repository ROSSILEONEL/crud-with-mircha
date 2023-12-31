import { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialDB=[{id:1,name:'Goku',power:1000},{id:2,name:'Vegeta',power:900},{id:3,name:'Gohan',power:800},
{id:4,name:'Trunks',power:700},{id:5,name:'Piccolo',power:600},{id:6,name:'Krilin',power:500}]

export function CrudApp() {
    

    const [db, setDb] = useState(initialDB)  
    const [dataToEdit, setDataToEdit] = useState(null)
    
    
    const createData= (data)=>{
      data.id= Date.now()
      setDb([...db,data])
    }
    const updateData= (data)=>{
      const newData = db.map(el=>el.id===data.id?data:el)
      console.log('newData',newData);
      setDb(newData)
    }
      
    const deleteData= (id)=>{
    
      let kill = window.confirm(`¿Estás seguro de eliminar a ${id}?`)
      if(kill){
        const newData = db.filter(el=>el.id!==id)
        setDb(newData)
    }
    }
    
      return (
        <>
          <h2 className="text-center text-5xl  text-red-900 h-2">CRUD APP</h2>
          <main className="flex flex-col justify-start items-center h-screen mt-10  w-full bg-zinc-50 ">
    <div className="card border text-center">
    
          <CrudForm 
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          />
          <CrudTable 
          data={db} 
          deleteData={deleteData} 
          setDataToEdit={setDataToEdit} />
          </div>
          </main>
        </>
      );
}