import React from "react";

function useLocalStorage (itemName, initialValue) {
    
  const[item, setItem] = React.useState(initialValue);
  const[loading, setloading] = React.useState(true); 
  const[error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setloading(false);
      } catch (error) {
        setloading(false);
        setError(true);
      }
    }, 2000);
  }, [initialValue, itemName]);
  
 
  
  
    const saveItem = (newItem) => {
     localStorage.setItem(itemName,JSON.stringify(newItem));
     setItem(newItem);
    };
  

    return {
      item,
      saveItem, 
      loading, 
      error,
    };
  }

  export { useLocalStorage };

  // localStorage.removeItem('TODOSV1')

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'aprender curso', completed: false },
//   { text: 'llegar a ascendente', completed: false },
//   { text: 'no se que poner ', completed: false },
//   { text: 'aea', completed: true},
// ];

// localStorage.setItem('TODOSV1',JSON.stringify(defaultTodos));


  // console.log('log 1');

  // // se ejecuta al final 
  // // React.useEffect(() =>{
  // //   console.log('looooogbait 2')
  // // });
 
  // // se ejecuta solo una vez 
  // // React.useEffect(() =>{
  // //   console.log('looooogbait 2')
  // // }, []);

  // //se ejecuta 1 vez y cuando se usa el estado totaltodos
  // // React.useEffect(() =>{
  // //   console.log('looooogbait 2')
  // // }, [totalTodos]);

  // console.log('log 3');