import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/appColors';
import * as Progress from 'react-native-progress';
import {imagePath} from '../../utils/imagePath';

const ProfileBar = ({text, onPress, progress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Text style={styles.profileTitle}>{text}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.progressContainer}>
        {progress && (
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressText}>57</Text>

            <Progress.Bar progress={0.7} width={186} color={appColors?.brown} />
          </View>
        )}
        <Image source={imagePath?.chevron} style={styles.chevronImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: '5%',
    borderBottomWidth: 1,
    borderBottomColor: appColors?.gray,
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
  },
  profileInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    height: 50,
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: appColors?.black,
  },
  progressContainer: {
    height: 50,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressTextContainer: {
    alignItems: 'center',
  },
  progressText: {
    textAlign: 'center',
    color: appColors?.black,
  },
  chevronImage: {
    alignSelf: 'center',
  },
});

export default ProfileBar;
