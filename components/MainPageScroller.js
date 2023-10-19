import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Dimensions, Animated, PanResponder, StyleSheet } from 'react-native';
import ProfileBox from './ProfileBox';
import AnimatedLoadingS from './AnimatedLoadingS';

const { width, height } = Dimensions.get('window');
const SWIPE_THRESHOLD = 50;
const LOADING_DELAY = 500;

const MainPageScroller = ({ profiles }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const swipeAnim = useRef(new Animated.ValueXY()).current;

    const handleSwipe = direction => {
        setLoading(true);
        let toValue = { x: 0, y: 0 };

        if (direction === 'up') {
            toValue.y = -height;
        } else if (direction === 'right') {
            toValue.x = width;
        }

        Animated.spring(swipeAnim, {
            toValue,
            useNativeDriver: true,
        }).start(() => {
            swipeAnim.setValue({ x: 0, y: 0 });
            setCurrentIndex(prevIndex => {
                // Ensure that the animation resets before moving to the next profile
                swipeAnim.setValue({ x: 0, y: 0 });
                return prevIndex + 1;
            });
        });

    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                { dx: swipeAnim.x, dy: swipeAnim.y },
            ],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: (e, { dx, dy }) => {
            if (dy < -SWIPE_THRESHOLD) {
                handleSwipe('up');
            } else if (dx > SWIPE_THRESHOLD) {
                handleSwipe('right');
            } else {
                Animated.spring(swipeAnim, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true,
                }).start();
            }
        }
    });

    useEffect(() => {
        if (loading) {
            setTimeout(() => setLoading(false), LOADING_DELAY);
        }
    }, [loading]);

    const renderItem = ({ item }) => (
        <Animated.View
            {...panResponder.panHandlers}
            style={[styles.profileContainer, { transform: swipeAnim.getTranslateTransform() }]}
        >
            <ProfileBox profile={item} />
        </Animated.View>
    );

    return (
        <View>
            {profiles.length > currentIndex ? (
                loading ? <AnimatedLoadingS style={styles.loadingStyle} /> : renderItem({ item: profiles[currentIndex], index: currentIndex })
            ) : (
                <Text>No more profiles could be found</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        width,
        height,
    },
    loadingStyle: {
        position: 'absolute',
        top: -1000,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default MainPageScroller;
