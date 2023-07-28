import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Ionicons } from '@expo/vector-icons';

import { LanguageContext } from '../providers/LanguageProvider';
import { ThemeContext } from '../providers/ThemeProvider';

import lightColors from '../assets/colors/lightColors';
import darkColors from '../assets/colors/darkColors';
import turkish from '../assets/languages/turkish';
import english from '../assets/languages/english';
import { Linking } from 'react-native';

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {

    const { language, toggleLanguage } = useContext(LanguageContext);
    const lingo = language === "tr" ? turkish : english;

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const theme = isDarkMode ? darkColors : lightColors;

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Geçerli bir e-posta adresi girin.').required('E-posta adresi zorunludur.'),
        password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır.').required('Şifre zorunludur.'),
    });

    const openWebsite = async () => {
        const websiteURL = "https://www.github.com/KaanKayserili";
        Linking.canOpenURL(websiteURL).then((supported) => {
            if (supported) {
                return Linking.openURL(websiteURL);
            } else {
                console.log("error")
            }
        }).catch((error) => console.error("An error occurred: ", error))
    }


    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
                // Giriş işlemi burada gerçekleştirilebilir
                console.log(values);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={[styles.container, { backgroundColor: theme.Background }]}>

                    <View>
                        <TouchableOpacity onPress={openWebsite} style={{ alignItems: "center", alignSelf: "center", marginBottom: height * 0.04 }}>
                            <Image source={isDarkMode ? require("../assets/darkModeLogo.png") : require("../assets/lightModeLogo.png")} style={styles.logo} />
                        </TouchableOpacity>

                        <Text style={[styles.heading, { color: theme.Text }]}>{lingo.AppHeader}</Text>
                    </View>

                    <TextInput
                        style={[styles.input, {
                            backgroundColor: theme.Input, borderColor: theme.Border, placeholderTextColor: theme.PlaceHolder, color: theme.InputText,
                        }]}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="E-posta adresi"
                    />
                    {touched.email && errors.email && <Text>{errors.email}</Text>}

                    <TextInput
                        style={[styles.input, {
                            backgroundColor: theme.Input, borderColor: theme.Border, placeholderTextColor: theme.PlaceHolder, color: theme.InputText,
                        }]}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder="Şifre"
                        secureTextEntry
                    />
                    {touched.password && errors.password && <Text>{errors.password}</Text>}

                    <TouchableOpacity style={[styles.button, { backgroundColor: theme.Button, borderColor: theme.Border, }]} onPress={handleSubmit} disabled={!values.email || !values.password}>
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Giriş Yap</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    logo: {
        width: width * 0.4564,
        height: width * 0.2044,
        resizeMode: 'contain',
        alignSelf: "center",
    },
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        marginTop: -20,
    },
    input: {
        width: "75%",
        marginLeft: "12.5%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 20,
        color: "black",
        fontSize: 20,
    },
    button: {
        width: "40%",
        marginLeft: "30%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center"
    },
})

export default Login;
