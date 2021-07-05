import React,{useState} from 'react';


const HandlerSet = () =>{
    const [text,setText] = useState('');
    const [suggestion,setSuggestion] =useState([]);
    const onChangeHandler = (data,text) => {
        let matches = [];
        let matches2 = []
        text = text.replace('\\','');
        if (text.length > 0){
          matches = data.filter( dt => {
            const regex = new RegExp(`${text}`, "gi");
            // var test = [...dt.email,...dt.first_name];
            console.log(dt.name.match(regex),"매치")
            return dt.name.match(regex);
          })
        }
        if (text.length > 0){
          matches2 = data.filter( dt => {
            const regex = new RegExp(`\\${text}`, "gi");
            // var test = [...dt.email,...dt.first_name];
            let test = null
             dt.keyword.map(e => {
                console.log(e, "map")
                if (e.match(regex)){
                  console.log(e, "통과")
                  test =  dt.keyword
                  return
                }
            })
            console.log(test,"테스트")
            return test
          })
        }
        console.log(matches,"<<<")
        var result = new Set([...matches,...matches2])
        setSuggestion([...result])
        setText(text)
    
      }
    const onSuggestHandler = (text) =>{
        setText(text)
        onChangeHandler(text)
      }
    
    
}
export default HandlerSet;