import React, { useState } from "react";
import { View, Text, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Card, Input, Avatar} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
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

function DoctorBookingScreen({ navigation }) {

  return (
      <View style={styles.container4}>

  <Text style={styles.tname}> Book here</Text>
 </View>
  );
}
function DoctorProfileScreen({ navigation }) {

  return (
      <View style={styles.container4}>

    <View style={styles.card}>
  <Avatar 
rounded  
size="xlarge"
avatarStyle={styles.avatar}
  title="BP"
  onPress={() => console.log("Works!")}
  source={require('./assets/profile.jpg')} />
  
 <Text style={styles.tname}> Dr. Onoja Stanley</Text>
  <Text style={styles.tspecialization}>  <EntypoIcon
              name="awareness-ribbon"
              style={styles.icon}
            ></EntypoIcon> Cardiology</Text>
			 <Text style={styles.tlocation}> <EntypoIcon name="location-pin" style={styles.icon}></EntypoIcon>Enugu</Text>
			
  
  <Button
    buttonStyle={styles.button2}
  
    title={<Text style={styles.fee}>CONSULTATION FEE: N5000</Text>}/>
</View> 
<View style={styles.buttongroup}>
<Button
  icon={
    <IoniconsIcon
            name="md-chatbubbles"
            style={styles.icon16}
          ></IoniconsIcon>
  }
  buttonStyle={styles.button3}
  
/>
<Button
  icon={
   <IoniconsIcon name="ios-call" style={styles.icon16}></IoniconsIcon>
  }
  buttonStyle={styles.button3}

/>
<Button
  icon={
   <MaterialIconsIcon
            name="videocam"
            style={styles.icon16}
          ></MaterialIconsIcon>
  }
  buttonStyle={styles.button3}
  
/>
</View>
<Card title="DESCRIPTION">

          <Text>Biopsy: FNAC first to establish diagnosis. There may be a false +ve/-ve. Open wide excision or trucut biopsy for paraffin section histology core biopsy with sonographic guidance, mammography or ultrasonograhic guidance as an alternative to excision biopsy. Excisional
biopsy for a lump 3mm, incisional biopsy for a lump that is too big
</Text>
      
</Card>
<Card title="DESCRIPTION2">

          <Text>Biopsy: FNAC first to establish diagnosis. There may be a false +ve/-ve. Open wide excision or trucut biopsy for paraffin section histology core biopsy with sonographic guidance, mammography or ultrasonograhic guidance as an alternative to excision biopsy. Excisional
biopsy for a lump 3mm, incisional biopsy for a lump that is too big
</Text>
      
</Card>
  
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

const Tab = createBottomTabNavigator();

function DoctorTab() {
  return (
   
    <Tab.Navigator >
     <Tab.Screen name="dprofile" component={DoctorProfileScreen} /> 
      <Tab.Screen name="Booking" component={DoctorBookingScreen} />
      
    </Tab.Navigator>
	
  );
}
function PatientTab() {
  return (
    <Tab.Navigator >
     <Tab.Screen name="dprofile" component={DoctorProfileScreen} /> 
      <Tab.Screen name="Booking" component={DoctorBookingScreen} />
      
    </Tab.Navigator>
  );
}
function PharmacistTab() {
  return (
    <Tab.Navigator>
     <Tab.Screen name="dprofile" component={DoctorProfileScreen} /> 
      <Tab.Screen name="Booking" component={DoctorBookingScreen} />
      
    </Tab.Navigator>
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
<Stack.Screen name="pprofile" component={PatientTab} options={{ title: 'Profile', headerStyle: {backgroundColor: '#2089DC',}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',
          },
        }}
      />
<Stack.Screen name="dprofile" component={DoctorTab} options={{ title: 'Profile', headerStyle: {backgroundColor: '#2089DC',}, headerTintColor: '#fff',  headerTitleStyle: { fontWeight: 'bold',
          }, 
        }}
      />
<Stack.Screen name="phprofile" component={PharmacistTab} options={{ title: 'Profile', headerStyle: {backgroundColor: '#2089DC',}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',
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
	 
	 justifyContent: 'center',
	alignItems: 'center',
	
	backgroundColor: '#F2F2F2',
    
	
  },
  fee: {
	 
	
	fontFamily: 'lucida grande',
    fontWeight: 'bold',
   color: '#2089DC',
    
	
  },
  buttongroup: {
	 flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
	alignItems: 'center',
	flexDirection: "row",
	
	
  },
    card: {
	borderBottomRightRadius: 100,
	borderBottomLeftRadius: 100,
	    flex: 1,
    backgroundColor: '#2089DC',
    justifyContent: 'center',
	alignItems: 'center',
	alignSelf: ' Stretch',
	padding: 24,
	margin: 0,
	borderColor: '#2089DC',
  },
    tname: {
	
   fontSize: 20,
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
    
  }, 
   tlocation: {
	   
    fontSize: 20,
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
    
  },
   tspecialization: {

    fontSize: 20,
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
   
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
  button2: {
	  fontColor: '#2089DC',
	  backgroundColor : 'white',
  },
  
  button3: {
	margin: 30,
	width: 70,
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
   },
   avatar: {
	    
   
    justifyContent: 'center',
	alignItems: 'center',
	margin: 0,
  },
  icon16: {
    color: "rgba(254,249,249,1)",
    fontSize: 30
  },
});

