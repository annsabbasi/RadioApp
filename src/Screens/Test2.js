import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';

const Test2 = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };


    const handleSidebarItemPress = () => {
        // Handle sidebar item press logic here
        // For example, navigate to another screen or perform an action
        // ...

        // Close the sidebar after handling the item press
        closeSidebar();
    };

    return (
        <TouchableWithoutFeedback onPress={closeSidebar}>
            <View style={styles.container}>
                <TouchableOpacity onPress={openSidebar}>
                    <Text style={styles.hamburger}>☰</Text>
                </TouchableOpacity>

                <View style={[styles.content, isSidebarOpen && styles.contentWithSidebar]}>
                    <Text>Main Content</Text>
                </View>

                {isSidebarOpen && (
                    <View style={styles.sidebar}>
                        <TouchableOpacity onPress={handleSidebarItemPress}>
                            <Text>Sidebar Item 1</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    hamburger: {
        fontSize: 20,
        margin: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentWithSidebar: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dull the background when sidebar is open
    },
    sidebar: {
        width: 200,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        padding: 10,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
});

export default Test2;




// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';

// // const Test2 = () => {
// //     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //     const animatedValue = new Animated.Value(0);

// //     const openSidebar = () => {
// //         Animated.timing(animatedValue, {
// //             toValue: 1,
// //             duration: 300,
// //             useNativeDriver: false,
// //         }).start(() => {
// //             setIsSidebarOpen(true);
// //         });
// //     };

// //     const closeSidebar = () => {
// //         Animated.timing(animatedValue, {
// //             toValue: 0,
// //             duration: 300,
// //             useNativeDriver: false,
// //         }).start(() => {
// //             setIsSidebarOpen(false);
// //         });
// //     };

// //     const handleSidebarItemPress = () => {
// //         closeSidebar();
// //         // Handle sidebar item press logic here
// //         // For example, navigate to another screen or perform an action
// //         // ...
// //     };

// //     const contentTranslateX = animatedValue.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [0, 200],
// //     });

// //     return (
// //         <TouchableWithoutFeedback onPress={closeSidebar}>
// //             <View style={styles.container}>
// //                 <TouchableOpacity onPress={openSidebar}>
// //                     <Text style={styles.hamburger}>☰</Text>
// //                 </TouchableOpacity>

// //                 <Animated.View style={[styles.content, isSidebarOpen && styles.contentWithSidebar, { transform: [{ translateX: contentTranslateX }] }]}>
// //                     <Text>Main Content</Text>
// //                 </Animated.View>

// //                 {isSidebarOpen && (
// //                     <View style={styles.sidebar}>
// //                         <TouchableOpacity onPress={handleSidebarItemPress}>
// //                             <Text>Sidebar Item 1</Text>
// //                         </TouchableOpacity>
// //                     </View>
// //                 )}
// //             </View>
// //         </TouchableWithoutFeedback>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         flexDirection: 'row',
// //         backgroundColor: '#fff',
// //     },
// //     hamburger: {
// //         fontSize: 20,
// //         margin: 10,
// //     },
// //     content: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: '#fff',
// //     },
// //     contentWithSidebar: {
// //         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dull the background when sidebar is open
// //     },
// //     sidebar: {
// //         width: 200,
// //         backgroundColor: '#fff',
// //         position: 'absolute',
// //         left: 0,
// //         top: 0,
// //         height: '100%',
// //         padding: 10,
// //         borderRightWidth: 1,
// //         borderColor: '#ccc',
// //     },
// // });

// // export default Test2;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';

// const Test2 = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const animatedValue = new Animated.Value(0);

//     useEffect(() => {
//         if (isSidebarOpen) {
//             openSidebar();
//         } else {
//             closeSidebar();
//         }
//     }, [isSidebarOpen]);

//     const openSidebar = () => {
//         Animated.timing(animatedValue, {
//             toValue: 1,
//             duration: 300,
//             useNativeDriver: false,
//         }).start();
//     };

//     const closeSidebar = () => {
//         Animated.timing(animatedValue, {
//             toValue: 0,
//             duration: 300,
//             useNativeDriver: false,
//         }).start();
//     };

//     const handleSidebarItemPress = () => {
//         closeSidebar();
//         // Handle sidebar item press logic here
//         // For example, navigate to another screen or perform an action
//         // ...
//     };

//     const contentTranslateX = animatedValue.interpolate({
//         inputRange: [0, 100],
//         outputRange: [0, 200],
//     });

//     return (
//         <TouchableWithoutFeedback onPress={closeSidebar}>
//             <View style={styles.container}>
//                 <TouchableOpacity onPress={() => setIsSidebarOpen(!isSidebarOpen)}>
//                     <Text style={styles.hamburger}>☰</Text>
//                 </TouchableOpacity>

//                 <Animated.View style={[styles.content, isSidebarOpen && styles.contentWithSidebar, { transform: [{ translateX: contentTranslateX }] }]}>
//                     <Text>Main Content</Text>
//                 </Animated.View>

//                 {isSidebarOpen && (
//                     <View style={styles.sidebar}>
//                         <TouchableOpacity onPress={handleSidebarItemPress}>
//                             <Text>Sidebar Item 1</Text>
//                         </TouchableOpacity>
//                     </View>
//                 )}
//             </View>
//         </TouchableWithoutFeedback>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         backgroundColor: '#fff',
//     },
//     hamburger: {
//         fontSize: 20,
//         margin: 10,
//     },
//     content: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         transition: 'background-color 0.3s', // Add transition for background color
//     },
//     contentWithSidebar: {
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dull the background when sidebar is open
//     },
//     sidebar: {
//         width: 200,
//         backgroundColor: '#fff',
//         position: 'absolute',
//         left: 0,
//         top: 0,
//         height: '100%',
//         padding: 10,
//         borderRightWidth: 1,
//         borderColor: '#ccc',
//     },
// });

// export default Test2;
