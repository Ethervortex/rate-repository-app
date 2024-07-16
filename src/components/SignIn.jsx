import { useFormik } from 'formik';
import { View, StyleSheet, TextInput, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';


const initialValues = {
    username: '',
    password: '',
  };

const onSubmit = (values) => {
  console.log(values);
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 20,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.textWhite,
  },
});

const SignIn = () => {
  const { handleChange, handleBlur, handleSubmit, values } = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { color: values.username ? theme.colors.textPrimary : theme.colors.textSecondary },
        ]}
        placeholder="Username"
        placeholderTextColor={theme.colors.textSecondary}
        onChangeText={handleChange('username')}
        onBlur={handleBlur('username')}
        value={values.username}
      />

      <TextInput
        style={[
          styles.input,
          { color: values.password ? theme.colors.textPrimary : theme.colors.textSecondary },
        ]}
        placeholder="Password"
        placeholderTextColor={theme.colors.textSecondary}
        secureTextEntry
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
      />

      <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#ddd' : theme.colors.primary },
        ]}
      >
        <Text fontSize="subheading" fontWeight="bold" style={styles.buttonText}>
          Sign In
        </Text>
      </Pressable>
    </View>
  )
};

export default SignIn;