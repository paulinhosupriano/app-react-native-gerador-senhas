import { View, Text,StyleSheet, TouchableOpacity, Pressable} from 'react-native';

export function ModalPassword(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>
                <Pressable style={styles.innerPassword}>
                    <Text style={styles.innerPasswordText}>123123</Text>
                </Pressable>

                <View style={styles.ButtonArea}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Salvar Senha
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
       backgroundColor:"rgba(24,24,24,0.6)",
       flex:1,
       alignItems:"center",
       justifyContent:"center"
    },
    content:{
        backgroundColor:"#FFF",
        width:"85%",
        paddingTop:24,
        paddingBottom:24,
        alignItems:"center",
        borderRadius:8
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000",
        marginBottom : 24
    },
    innerPassword:{
        backgroundColor:"#0e0e0e",
        width:"90%",
        padding:14,
        borderRadius:8

    },
    innerPasswordText:{
        color:"#fff",
        textAlign:"center"
    },
    ButtonArea:{
        flexDirection:"row",
        width:"90%",
        marginTop:8,
        alignItems:"center",
        justifyContent:"center"
    },
    button:{
        flex:1,
        alignItems:"center",
        marginTop:14,
        marginBottom:14
    },
    buttonText:{

    }
});