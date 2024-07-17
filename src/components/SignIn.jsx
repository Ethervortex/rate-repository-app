import { useFormik } from 'formik';
import * as yup from 'yup';
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
  errorInput: {
    borderColor: '#d73a4a',
  },
  errorText: {
    color: '#d73a4a',
    marginBottom: 5,
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

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
  });

const SignIn = () => {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          touched.username && errors.username ? styles.errorInput : {},
          { color: values.username ? theme.colors.textPrimary : theme.colors.textSecondary },
        ]}
        placeholder="Username"
        placeholderTextColor={theme.colors.textSecondary}
        onChangeText={handleChange('username')}
        onBlur={handleBlur('username')}
        value={values.username}
      />
      {touched.username && errors.username && (
        <Text style={styles.errorText}>{errors.username}</Text>
      )}

      <TextInput
        style={[
          styles.input,
          touched.password && errors.password ? styles.errorInput : {},
          { color: values.password ? theme.colors.textPrimary : theme.colors.textSecondary },
        ]}
        placeholder="Password"
        placeholderTextColor={theme.colors.textSecondary}
        secureTextEntry
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
      />
      {touched.password && errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

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