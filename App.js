import React,{useState} from 'react'
import { Button, Image, ScrollView, Text, TextInput, View } from 'react-native'
import ClassPropsPractice from './ClassPropsPractice'
import FlexDimention from './component/FlexDimention'
import PropsPractice from './PropsPractice'
import FlatListPractice from './component/FlatListPractice'

function App() {
    const [state, setState] = useState({ name:'Kaniz', age:'31', city:'Dhaka'})
    const [value, setvalue] = useState(true)
    const [text, setText] = useState('')

    const handleChange=()=>{
        setState({ name:'Fatema Munni', age:'31', city:'B.Baria'})
        setvalue(false)
    }
   
    const titleValue=value? 'Click me':'Thank you';

    const logo = {
        //from file location
        //require:'./component/images/logo.png',
        //from url location
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 64,
        height: 64
      };
//scrollView by default scroll vertical
//if want horizontal scroll => <scrollView horizontal={true}>
    return (
        <ScrollView>
            <Text>{state.name}</Text>
            <Text>{state.age}</Text>
            <Text>{state.city}</Text>
            <Button 
            onPress={handleChange} 
            disabled={!value}
            title={titleValue}
            color='green'
            />
            <FlexDimention/>

            <FlatListPractice/>

            <TextInput
              style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
                     }}
                defaultValue="Enter your name"
             />

            <PropsPractice name={'Eyahya'} age={'45'} city={'Stockholm'}/>
            
            <ClassPropsPractice name={'Khan'} age={'40'} city={'Börlange'}/>

            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Text style={{padding: 10, fontSize: 42}}>
                {text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
            
            <Image source={require('./component/images/mypic.jpg')} style={{width: 200, height: 200}}/>

            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>

        </ScrollView>
    )
}

export default App

