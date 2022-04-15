import React, { useState } from 'react'
import InputFild from './InputFild';

const App = () => {
    let [data,setData]=useState('');
    const [first,setFirst]=useState('');
    const [second,setSecond]=useState('');
    const [third,setThird]=useState('');
    const [fourth,setFourth]=useState('');
    const [display,setDisplay]=useState(true);
    const [copied,setCopied]=useState(false);

    const handleChange = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
        console.log(fieldName);
        let fieldIntIndex = parseInt(fieldIndex, 10);
        
        if (value.length >= maxLength) {
            if (fieldIntIndex < 5) {
                if(fieldIndex<2){
                    setFirst(e.target.value);
                }
                else if(fieldIndex<3){
                    setSecond(e.target.value);
                }
                else if(fieldIndex<4){
                    setThird(e.target.value);
                }
                else if(fieldIndex<5){
                    setFourth(e.target.value);
                }
                // Get the next input field using it's name
                const nextfield = document.querySelector(
                `input[name=field-${fieldIntIndex + 1}]`
                );
                // If found, focus the next field
                if (nextfield !== null) {
                nextfield.focus();
                }
            }
        }
        else if (value.length === 0) {
            if(fieldIndex > 0){
                const prevfield = document.querySelector(
                    `input[name=field-${fieldIntIndex - 1}]`
                    );
                    
                    // If found, focus the next field
                    if (prevfield !== null) {
                    prevfield.focus();
                    }
            }
        }

    };
    
   const copiedData=(e)=>{
       console.log('paste called');
       setCopied(true);
    let { maxLength, value, name } = e.target;
        let [fieldName, fieldIndex] = name.split("-");
        console.log(maxLength);
        console.log(value);
        console.log(fieldName);
        setData(e.clipboardData.getData('Text'));
        let fieldIntIndex = parseInt(fieldIndex, 10);
        var subval=0;
        var rangeval=4;
        while (fieldIntIndex < 5) {
            
                var incr=0;
                console.log(incr);
                incr+=1;
                
                const nextfield = document.querySelector(
                `input[name=field-${fieldIntIndex}]`
                );
                nextfield.value=(e.clipboardData.getData('Text')).substring(subval,rangeval);
                
                subval=subval+4;
                rangeval=rangeval+4;
                nextfield.focus();
                  
                
                if(fieldIndex<2){
                    setFirst(e.target.value);
                    console.log('first');
                }
                else if(fieldIndex<3){
                    setSecond(e.target.value); 
                    console.log('second'); 
                }
                else if(fieldIndex<4){
                    setThird(e.target.value);
                    console.log('third');
                }
                else if(fieldIndex<5){
                    setFourth(e.target.value);
                    console.log('fourth');
                }
                fieldIntIndex += 1;
    }
    }
    const printdata=(e)=>{
        e.preventDefault();

        if(!copied){
            setData(data + first + ' ' + second + ' ' + third + ' ' + fourth);
            setDisplay(false)
        }
        
        if(copied){
            setDisplay(false)
            setCopied(false)
        }
        

    }
    
    const deleteData=(e)=>{
        setFirst('');
        setSecond('');
        setThird('');
        setFourth('');
        setData('');
        setDisplay(true);
        for(var i=1;i<5;i++){
            var inpt=document.querySelector(
                `input[name=field-${i}]`).value='';
                console.log(inpt);
        }
    }

    

  return (
    <>
        <div>
            <h2>Card Number * </h2>
            <form action="">
                <InputFild name="field-1" length="4"
                        handleChange={handleChange} copiedData={copiedData}  /> &nbsp;&nbsp;
                <InputFild name="field-2" length="4"
                        handleChange={handleChange} copiedData={copiedData}  /> &nbsp;&nbsp;
                <InputFild name="field-3" length="4"
                        handleChange={handleChange} copiedData={copiedData}  /> &nbsp;&nbsp;
                <InputFild name="field-4" length="4"
                        handleChange={handleChange} copiedData={copiedData}  /> &nbsp;&nbsp;
                <br /><br />
                <button type="submit" onClick={printdata}>submit</button>
            </form>
            {
                (display) ? null
                :
                <div>
                <button onClick={deleteData} >Delete</button>
                <h3>{data}</h3>
                </div>
            }
        </div>
    </>
  )
}


export default App

