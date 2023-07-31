import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Ionicons } from '@expo/vector-icons';

import { useLanguage } from '../utils/LanguageProvider';
import { useTheme } from '../utils/ThemeProvider';

import lightColors from '../assets/colors/lightColors';
import darkColors from '../assets/colors/darkColors';
import turkish from '../assets/languages/turkish';
import english from '../assets/languages/english';
import { Linking } from 'react-native';
import { useUser } from '../utils/UserProvider';
import Button from '../components/Button';

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
    const { user, setUser } = useUser();

    const [isVisiblePassword, setisVisiblePassword] = useState(false);

    const { language } = useLanguage();
    const lingo = language === "tr" ? turkish : english;

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

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
                setUser(values);
                navigation.navigate('Main');
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
                            backgroundColor: theme.Input, borderColor: theme.Border, color: theme.InputText,
                        }]}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="E-posta adresi"
                        placeholderTextColor={theme.PlaceHolder}
                    />
                    {touched.email && errors.email && <Text style={{ marginLeft: "15%", marginTop: - 20, marginBottom: 20, color: theme.Unneccessary }}>{errors.email}</Text>}

                    <View style={[styles.passwordInputContainer, { width: width * 0.75, backgroundColor: theme.Input, borderColor: theme.Border, }]}>
                        <TextInput
                            style={[styles.passwordInput, {
                                width: width * 0.75 * 0.775, backgroundColor: theme.Input, color: theme.InputText,
                            }]}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder={"Şifre"}
                            secureTextEntry={!isVisiblePassword}
                            autoCapitalize={"none"}
                            placeholderTextColor={theme.PlaceHolder}
                        />
                        <TouchableOpacity style={{ borderRadius: width * 0.1, borderWidth: 1, borderColor: theme.Border, padding: 5 }} onPress={() => { setisVisiblePassword(prev => !prev) }}>
                            <Ionicons name={isVisiblePassword ? "eye-off-outline" : "eye-outline"} size={20} color={theme.Icon} />
                        </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && <Text style={{ marginLeft: "15%", marginTop: - 20, marginBottom: 20, color: theme.Unneccessary }}>{errors.password}</Text>}

                    <Button handleSubmit={handleSubmit} text={lingo.Login} width={"40%"} marginLeft={"30%"} />
                </View>
            )
            }
        </Formik >
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
        marginBottom: 20,
        fontSize: 20,
    },
    passwordInputContainer: {
        flexDirection: "row",
        borderWidth: 1,
        marginLeft: "12.5%",
        borderRadius: 40,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    passwordInput: {
        fontSize: 20,
    },
})

export default Login;
