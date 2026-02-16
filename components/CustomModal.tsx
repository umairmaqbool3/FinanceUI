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

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  showCloseButton?: boolean;
  animationType?: ModalProps['animationType'];
}

const CustomModal: FC<CustomModalProps> = ({
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
                {/* {showCloseButton && (
                  <TouchableOpacity onPress={onClose}>
                    <Text style={[styles.close, { color: Colors[theme].text }]}>✕</Text>
                  </TouchableOpacity>
                )} */}
              </View>

              <ThemedText style={{ fontFamily: Fonts.semiBold, fontSize: 15, marginVertical: spacingY._5 }}>
                Are You Sure You Want To Log Out?
              </ThemedText>

              <ThemedText style={{ fontSize: 13, textAlign: 'center', marginVertical: spacingY._20, width: '85%', fontFamily: Fonts.regular }}>
                By deleting your account, you agree that you understand the consequences of this action and that you agree to permanently delete your account and all associated data.
              </ThemedText>

              <View style={[styles.buttonContainer, { marginTop: spacingY._30, marginBottom: spacingY._10 }]}>
                <CustomButton
                  title="Yes, Delete Account"
                  textStyle={styles.buttonText}
                  onPress={() => router.back()}
                />
              </View>

              <View style={styles.buttonContainer}>
                <CustomButton
                  title="Cancel"
                  textStyle={styles.buttonText}
                  containerStyle={{ backgroundColor: Colors.light.secondaryBtn }}
                  onPress={() => router.back()}
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

export default CustomModal;

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
    marginVertical: spacingY._20
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
