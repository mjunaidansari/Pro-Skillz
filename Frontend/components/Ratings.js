import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Ratings = ({ rating }) => {
    const totalStars = 5;

    const renderStars = () => {
        const filledStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        const starIcons = [];

        // Render filled stars
        for (let i = 0; i < filledStars; i++) {
            starIcons.push(<Ionicons key={i} name="star" size={17} color="#FFD700" />);
        }

        // Render half star if applicable
        if (hasHalfStar) {
            starIcons.push(<Ionicons key="half" name="star-half" size={17} color="#FFD700" />);
        }

        // Render remaining empty stars
        const remainingStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            starIcons.push(<Ionicons key={`empty-${i}`} name="star-outline" size={17} color="#FFD700" />);
        }

        return starIcons;
    };

    return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
};

export default Ratings;
