import React from 'react'
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from '../../components/Themed';
import styles from './styles';

// {
//     id: 'episode1',
//     title: '1. Pilot Part 1 & 2',
//     poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep0.jpg',
//     duration: '1h 21m',
//     plot: 'When Harvey\'s promotion requires him to recruit and hire a graduate of Harvard Law, he chooses Mike Ross. But Mike doesn\'t actualy have a law degree',
//     video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
// }

interface EpisodeItemProps {
    episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string,
    }
}

const EpisodeItem = (props: EpisodeItemProps) => {
    const { episode } = props;

    return (
        <View style={{ margin: 10 }}>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: episode.poster }} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>
                </View>

                <AntDesign name="download" size={24} color={'white'} />
            </View>

            <Text style={styles.plot}>{episode.plot}</Text>
        </View>
    )
};

export default EpisodeItem;

