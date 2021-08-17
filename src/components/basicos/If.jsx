// nesse componente não é necessario importar o react, pois não a sintax jsx apenas java script puro 
export default function (props){
    if(props.test){
        return props.children
    }else{
        return false;
    }
    
}