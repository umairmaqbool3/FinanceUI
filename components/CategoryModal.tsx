import { Colors, Fonts } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { FC, ReactNode } from 'react';
import {
  Dimensions,
  Modal,
  ModalProps,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import CustomButton from './CustomButton';

const { height } = Dimensions.get('window');

interface CategoryModalProps {
  visible: boolean;
  onClose: () => void;
  children?: ReactNode;
  animationType?: ModalProps['animationType'];
}

const CategoryModal: FC<CategoryModalProps> = ({
  visible,
  onClose,
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
                <Text style={[styles.title, { color: Colors[theme].text }]}>New Category</Text>
              </View>

              <TextInput
                placeholder="Write..."
                placeholderTextColor={Colors[theme].primary}
                style={[styles.input, { borderColor: Colors[theme].primary }]}
              />

              <View style={[styles.buttonContainer, { marginTop: spacingY._10, marginBottom: spacingY._10 }]}>
                <CustomButton
                  title="Save"
                  textStyle={styles.buttonText}
                  onPress={onClose}
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

export default CategoryModal;

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
    marginBottom: spacingY._10
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '300'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    borderRadius: 25,
    paddingHorizontal: spacingX._20,
    height: 42,
    backgroundColor: Colors.light.secondaryBtn,
    width: '90%',
  },
});
