import React, { useState } from "react";
import { View, Text, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Card, Input, Avatar} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from "react-native-vector-icons/Entypo";
function HomeScreen({ navigation }) {
  return (
<View style={styles.container}>

<Image style={styles.logo} source={require('./assets/icon.png')}/>
<Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>

<Card containerStyle={styles.container2} >
<Text style={styles.heading}>Register here</Text>
  <Button 
  buttonStyle={styles.button}
  title="Patients"
  type="outline"
 onPress={() => navigation.navigate('PatientsRegister')} 
/>   
     
  <Button
  buttonStyle={styles.button}
  title="Doctors"
  type="outline"
 onPress={() => navigation.navigate('DoctorsRegister')} 
/>    
	  
  <Button
  buttonStyle={styles.button}
  title="Pharmacists"
  type="outline"
 onPress={() => navigation.navigate('PharmacistsRegister')} 
/>
  </Card>

 <Text style={styles.paragraph}>
        Already registered? <Text  onPress={() => navigation.navigate('Login')} style={styles.text}> Login</Text>
      </Text>  
    </View>
  );
}
function PatientsRegisterScreen({ navigation }) {
  return (
      <View style={styles.container}>
<Image style={styles.logo} source={require('./assets/icon.png')}/>
<Card containerStyle={styles.container2} >
<Text style={styles.heading}>Register</Text>
<Input
  placeholder='Email'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Phone number'
  leftIcon={
    <Icon
      name='phone'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Password'
  leftIcon={
    <Icon
      name='lock'
      size={20}
      color='black'
    />
	
  }
/>
<DropDownPicker
    items={[
        {label: 'Nigeria', value: 'Nigeria'},
        {label: 'Ghana', value: 'Ghana'},
    ]}
    defaultIndex={0}
    containerStyle={styles.select}
    onChangeItem={item => console.log(item.label, item.value)}
	placeholder="Select Country"
/>
<Input
  placeholder='Home Address'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>

<DropDownPicker
    items={[
        {label: 'Enugu', value: 'Enugu'},
        {label: 'Lagos', value: 'Lagos'},
    ]}
    defaultIndex={0}
    containerStyle={styles.select}
    onChangeItem={item => console.log(item.label, item.value)}
	placeholder="Select State"
/>
    <Button
  icon={{
    name: "send",
    size: 15,
    color: "white"
  }}
  title="Register"
/> 

  </Card>

<Text onPress={() => navigation.goBack()} style={styles.text}> Go back
      </Text> 
	  
 <Text style={styles.paragraph}>
        Already registered? <Text  onPress={() => navigation.navigate('Login')} style={styles.text}> Login</Text>
      </Text> 
    </View>
  );
}

function DoctorProfileScreen({ navigation }) {

  return (
      <View style={styles.container4}>
<Avatar 
rounded  
size="large"
  title="BP"
  onPress={() => console.log("Works!")}
  source={require('./assets/avatar.png')} />
  <Text style={styles.tname}> Firstname Lastname</Text>
   
  <Text style={styles.tspecialization}>  <EntypoIcon
              name="awareness-ribbon"
              style={styles.icon}
            ></EntypoIcon> Specialization</Text>
  <Text style={styles.tlocation}> <EntypoIcon name="location-pin" style={styles.icon}></EntypoIcon>Location</Text>
  
   <Text style={styles.description}>DESCRIPTION</Text>
       
  
    </View>
  );
}

function PatientProfileScreen({ navigation }) {
const [selectedValue, setSelectedValue] = useState("java");	
  return (
      <View style={styles.container}>
<Image style={styles.logo} source={require('./assets/icon.png')}/>
<Card containerStyle={styles.container2} >
<Text style={styles.heading}>Register</Text>
<Input
  placeholder='Email'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Phone number'
  leftIcon={
    <Icon
      name='phone'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Password'
  leftIcon={
    <Icon
      name='lock'
      size={20}
      color='black'
    />
	
  }
/>
<DropDownPicker
    items={[
        {label: 'Nigeria', value: 'Nigeria'},
        {label: 'Ghana', value: 'Ghana'},
    ]}
    defaultIndex={0}
    containerStyle={styles.select}
    onChangeItem={item => console.log(item.label, item.value)}
	placeholder="Select Country"
/>
<Input
  placeholder='Home Address'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>

<DropDownPicker
    items={[
        {label: 'Enugu', value: 'Enugu'},
        {label: 'Lagos', value: 'Lagos'},
    ]}
    defaultIndex={0}
    containerStyle={styles.select}
    onChangeItem={item => console.log(item.label, item.value)}
	placeholder="Select State"
/>
    <Button
  icon={{
    name: "send",
    size: 15,
    color: "white"
  }}
  title="Register"
/> 

  </Card>

<Text onPress={() => navigation.goBack()} style={styles.text}> Go back
      </Text> 
 <Text style={styles.paragraph}>
        Already registered? <Text  onPress={() => navigation.navigate('Login')} style={styles.text}> Login</Text>
      </Text> 
    </View>
  );
}

function PharmacistProfileScreen({ navigation }) {
const [selectedValue, setSelectedValue] = useState("java");	
  return (
      <View style={styles.container}>
<Image style={styles.logo} source={require('./assets/icon.png')}/>
<Card containerStyle={styles.container2} >
<Text style={styles.heading}>Register</Text>
<Input
  placeholder='Email'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Phone number'
  leftIcon={
    <Icon
      name='phone'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Password'
  leftIcon={
    <Icon
      name='lock'
      size={20}
      color='black'
    />
	
  }
/>
<DropDownPicker
    items={[
        {label: 'Nigeria', value: 'Nigeria'},
        {label: 'Ghana', value: 'Ghana'},
    ]}
    defaultIndex={0}
    containerStyle={styles.select}
    onChangeItem={item => console.log(item.label, item.value)}
	placeholder="Select Country"
/>
<Input
  placeholder='Home Address'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>

<DropDownPicker
    items={[
        {label: 'Enugu', value: 'Enugu'},
        {label: 'Lagos', value: 'Lagos'},
    ]}
    defaultIndex={0}
    containerStyle={styles.select}
    onChangeItem={item => console.log(item.label, item.value)}
	placeholder="Select State"
/>
    <Button
  icon={{
    name: "send",
    size: 15,
    color: "white"
  }}
  title="Register"
/> 

  </Card>

<Text onPress={() => navigation.goBack()} style={styles.text}> Go back
      </Text> 
 <Text style={styles.paragraph}>
        Already registered? <Text  onPress={() => navigation.navigate('Login')} style={styles.text}> Login</Text>
      </Text> 
    </View>
  );
}

function DoctorsRegisterScreen({ navigation }) {
const [selectedValue, setSelectedValue] = useState("java");	
  return (
      <View style={styles.container}>
<Image style={styles.logo} source={require('./assets/icon.png')}/>
<Card containerStyle={styles.container2} >
<Text style={styles.heading}>Register</Text>
<Input
  placeholder='Email'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Phone number'
  leftIcon={
    <Icon
      name='phone'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Password'
  leftIcon={
    <Icon
      name='lock'
      size={20}
      color='black'
    />
	
  }
/>
<DropDownPicker
    items={[
        {label: 'Nigeria', value: 'Nigeria'},
        {label: 'Ghana', value: 'Ghana'},
    ]}
    defaultIndex={0}
    containerStyle={styles.select}
    onChangeItem={item => console.log(item.label, item.value)}
	placeholder="Select Country"
/>
<Input
  placeholder='Home Address'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>

<Input
  placeholder='MDCN No'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>

<DropDownPicker
    items={[
        {label: 'Enugu', value: 'Enugu'},
        {label: 'Lagos', value: 'Lagos'},
    ]}
    defaultIndex={0}
    containerStyle={styles.select}
    onChangeItem={item => console.log(item.label, item.value)}
	placeholder="Select State"
/>
    <Button
  icon={{
    name: "send",
    size: 15,
    color: "white"
  }}
  title="Register"
/> 

  </Card>

<Text onPress={() => navigation.goBack()} style={styles.text}> Go back
      </Text> 
 <Text style={styles.paragraph}>
        Already registered? <Text  onPress={() => navigation.navigate('Login')} style={styles.text}> Login</Text>
      </Text> 
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
  <View style={styles.container}>
<Image style={styles.logo} source={require('./assets/icon.png')}/>
<Card containerStyle={styles.container2} >
<Text style={styles.heading}>Login</Text>
<Input
  placeholder='Email'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Password'
  leftIcon={
    <Icon
      name='lock'
      size={20}
      color='black'
    />
	
  }
/>
    <Button
  icon={{
    name: "send",
    size: 15,
    color: "white"
  }}
  title="Login"
  onPress={() => navigation.navigate('dprofile')} 
/> 
  </Card>

<Text onPress={() => navigation.goBack()} style={styles.text}> Go back
      </Text>  
    </View>

  );
}
function PharmacistsRegisterScreen({ navigation }) {
  return (
   <View style={styles.container}>
<Image style={styles.logo} source={require('./assets/icon.png')}/>
<Card containerStyle={styles.container2} >
<Text style={styles.heading}>Register</Text>
<Input
  placeholder='Email'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Phone number'
  leftIcon={
    <Icon
      name='phone'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Password'
  leftIcon={
    <Icon
      name='lock'
      size={20}
      color='black'
    />
	
  }
/>
<DropDownPicker
    items={[
        {label: 'Nigeria', value: 'Nigeria'},
        {label: 'Ghana', value: 'Ghana'},
    ]}
    defaultIndex={0}
    containerStyle={styles.select}
    onChangeItem={item => console.log(item.label, item.value)}
	placeholder="Select Country"
/>
<Input
  placeholder='Home Address'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>
<Input
  placeholder='Licensing No'
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
	
  }
/>
<DropDownPicker
    items={[
        {label: 'Enugu', value: 'Enugu'},
        {label: 'Lagos', value: 'Lagos'},
    ]}
    defaultIndex={0}
    containerStyle={styles.select}
    onChangeItem={item => console.log(item.label, item.value)}
	placeholder="Select State"
/>
    <Button
  icon={{
    name: "send",
    size: 15,
    color: "white"
  }}
  title="Register"
  
/> 

  </Card>

<Text onPress={() => navigation.goBack()} style={styles.text}> Go back
      </Text>
 <Text style={styles.paragraph}>
        Already registered? <Text  onPress={() => navigation.navigate('Login')} style={styles.text}> Login</Text>
      </Text>	  
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home', headerShown: false}}/>
		
	<Stack.Screen name="PatientsRegister" component={PatientsRegisterScreen} options={{ title: 'Patient Registration', headerStyle: {backgroundColor: '#2089DC',}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',
          },
        }}
      />
<Stack.Screen name="DoctorsRegister" component={DoctorsRegisterScreen} options={{ title: 'Doctor Registration', headerStyle: {backgroundColor: '#2089DC',}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',
          },
        }}
      />
	  
 <Stack.Screen name="PharmacistsRegister" component={PharmacistsRegisterScreen} options={{ title: 'Pharmacist Registration', headerStyle: {backgroundColor: '#2089DC',}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',
          },
        }}
      />	  
<Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login', headerStyle: {backgroundColor: '#2089DC',}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',
          },
        }}
      />
<Stack.Screen name="pprofile" component={PatientProfileScreen} options={{ title: 'Profile', headerStyle: {backgroundColor: '#2089DC',}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',
          },
        }}
      />
<Stack.Screen name="dprofile" component={DoctorProfileScreen} options={{ title: 'Profile', headerStyle: {backgroundColor: '#2089DC',}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',
          },
        }}
      />
<Stack.Screen name="phprofile" component={PharmacistProfileScreen} options={{ title: 'Profile', headerStyle: {backgroundColor: '#2089DC',}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',
          },
        }}
      />
	  
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
	  icon: {
    
   
    color: "rgba(7,7,7,0.99)",
    fontSize: 17,
    width: 40,
    height: 44
  },
   description: {

    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 17
  },
  container: {
	 flex: 1,
    backgroundColor: 'F2F2F2',
    justifyContent: 'center',
	alignItems: 'center',
	
  },
  
    container2: {
    backgroundColor: 'white',
    justifyContent: 'center',
	alignItems: 'center',
	borderRadius: 5,
  },
   container3: {
	    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
	alignItems: 'center',
	borderRadius: 5,
	margin: 24,
  },
  container4: {
	 
	 flexDirection: 'row',
    flexWrap: 'wrap',
	 alignSelf: 'flex-start',
    backgroundColor: 'F2F2F2',
   margin: 24,
	
  },
    tname: {
	margin: 3,
   fontSize: 20,
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  }, 
   tlocation: {
	   margin: 3,
    fontSize: 20,
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
   tspecialization: {
margin: 3,
    fontSize: 20,
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  heading: {
    margin: 24,
    marginTop: 0,
    fontSize: 30,
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
   
    marginTop: 30,
    
    
  },
   select: {
   
   marginTop: 10,
    marginBottom: 30,
	height: 40, 
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
    
  },
   itemselect: {
 
	borderWidth: 0,
	height: 40, 
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
    
    
  },
  
   paragraph: {
    margin: 24,
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
	margin: 20,
    height: 60,
    width: 60,
	justifyContent: 'flex-start',
  },
  text: {
      color: '#2089DC',
	  fontWeight: 'bold',
   }
});

