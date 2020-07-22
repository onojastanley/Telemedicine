function DoctorsRegisterScreen({ navigation }) {
const [selectedValue, setSelectedValue] = useState("java");	
  return (
      <View style={styles.container}>
<Image style={styles.logo} source={require('../assets/icon.png')}/>
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
