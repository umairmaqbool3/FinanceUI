import { Colors, Fonts } from '@/constants/theme';
import { spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { router } from 'expo-router';
import React, { FC, ReactNode } from 'react';
import {
  Dimensions,
  Modal,
  ModalProps,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import CustomButton from './CustomButton';
import { ThemedText } from './themed-text';

const { height } = Dimensions.get('window');

interface LogoutModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  showCloseButton?: boolean;
  animationType?: ModalProps['animationType'];
}

const LogoutModal: FC<LogoutModalProps> = ({
  visible,
  onClose,
  title,
  showCloseButton = true,
  animationType = 'fade',
}) => {

  const theme = useColorScheme() ?? 'light';

  return (
    <Modal
      transparent
      visible={visible}
      animationType={animationType}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalContainer, { backgroundColor: Colors[theme].background }]}>
              <View style={styles.header}>
                <Text style={[styles.title, { color: Colors[theme].text }]}>{title}</Text>
              </View>

              <ThemedText style={{ fontFamily: Fonts.semiBold, fontSize: 15, marginVertical: spacingY._5 }}>
                Are You Sure You Want To Log Out?
              </ThemedText>

              <View style={[styles.buttonContainer, { marginTop: spacingY._30, marginBottom: spacingY._10 }]}>
                <CustomButton
                  title="Yes, End Session"
                  textStyle={styles.buttonText}
                  onPress={() => {
                    onClose();
                    router.push('/(auth)/login')
                  }}
                />
              </View>

              <View style={styles.buttonContainer}>
                <CustomButton
                  title="Cancel"
                  textStyle={styles.buttonText}
                  containerStyle={{ backgroundColor: Colors.light.secondaryBtn }}
                  onPress={onClose}
                />
              </View>
              <View style={{ height: spacingY._20 }} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    borderRadius: 18,
    padding: 16,
    maxHeight: height * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacingY._20,
    marginBottom: spacingY._7
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
  close: {
    fontSize: 18,
  },
  content: {
    marginTop: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '300'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
