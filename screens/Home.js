import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'

export default function Home () {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, marginTop: 30 }}>
            <View style={{ backgroundColor: "white", padding: 10 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
        </SafeAreaView>
    )
}
