import React, {useMemo, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
} from 'react-native';
import {Search} from '../../assets/icons/icons';

import {ms} from './utils';
import {isAndroid} from '@utils';
import { RitualCyan400 } from './Colors';

interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  isPassword?: boolean;
  keyboardType?: 'phone-pad' | 'default' | 'email-address' | 'numeric';
  capitalize?: 'sentences' | 'none' | 'words' | 'characters' | undefined;
  style?: {};
  inputStyle?: {};
  isPhone?: boolean;
  maxLength?: number;
  isLoading?: boolean;
  hasError?: boolean;
  errorMessage?: string | any;
  isSuccess?: boolean;
  successMessage?: string;
  data?: any;
  onChange: (value: string | object) => void;
  onBlur?: () => void;
  singular?: boolean;
  canSearch?: boolean;
  returnKeyType?: 'done' | 'next';
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
}

export const FormInput = ({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  keyboardType,
  isPassword,
  capitalize,
  style,
  inputStyle,
  hasError,
  errorMessage,
  isSuccess,
  successMessage,
  isLoading,
  isPhone,
  returnKeyType,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(isPassword);

  const returnKeyValue = useMemo(() => {
    if (returnKeyType) {
      return returnKeyType;
    }
    return keyboardType === 'phone-pad' ? 'done' : null;
  }, [keyboardType, returnKeyType]);

  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.label}>{label}</Text>
      {/* {isPhone && (
        <View style={styles.countryCode}>
          <Text style={styles.countryCodePlaceholder}>+234</Text>
        </View>
      )} */}
      <TextInput
        style={[
          styles.input,
          inputStyle,
          hasError && styles.error,
          isPhone && {paddingLeft: 80},
        ]}
        // placeholderTextColor={Grey700}
        placeholder={placeholder}
        autoCapitalize={capitalize}
        returnKeyType={returnKeyValue}
        value={value}
        onBlur={onBlur}
        textContentType="oneTimeCode"
        onChangeText={onChange}
        keyboardType={keyboardType}
        secureTextEntry={showPassword}
        {...props}
      />
      {/* {hasError && !isPassword && (
        <View style={styles.errorIcon}>
          <ErrorSign />
        </View>
      )} */}
      {/* {isSuccess && (
        <View style={styles.errorIcon}>
          <SuccessSign />
        </View>
      )} */}
      {/* {isPassword && (
        <View style={styles.iconWrapper}>
          {showPassword ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.eyesIcon}
              onPress={() => setShowPassword(false)}>
              <EyesIcon />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.eyesIcon}
              onPress={() => setShowPassword(true)}>
              <EyesCloseIcon />
            </TouchableOpacity>
          )}
        </View>
      )} */}
      {isLoading && (
        <ActivityIndicator size="small" color="#000" style={styles.loader} />
      )}
      {hasError && <Text style={styles.errorText}>{errorMessage}</Text>}
      {isSuccess && <Text style={styles.successText}>{successMessage}</Text>}
    </View>
  );
};

export const SearchInputBox = ({
  placeholder,
  value,
  onChange,
  style,
  inputStyle,
  onSubmitEditing,
}: InputProps) => (
  <View style={[styles.searchContainer, style]}>
    <Image
      style={styles.searchIcon}
      source={require('../../assets/images/magnifyingglass.png')}
    />
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={RitualCyan400}
      value={value}
      autoCapitalize="none"
      autoComplete="off"
      onChangeText={onChange}
      returnKeyType={'search'}
      style={[styles.searchInputBox, inputStyle]}
      onSubmitEditing={onSubmitEditing}
      autoCorrect={false}
    />
  </View>
);

export const SearchBar = ({
  placeholder,
  value,
  onChange,
  style,
  inputStyle,
}: InputProps) => (
  <View style={[styles.search, style]}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={RitualCyan400}
      value={value}
      autoCapitalize="none"
      autoComplete="off"
      onChangeText={onChange}
      style={[styles.searchInput, inputStyle]}
    />
    <View style={styles.searchBox}>
      <Search />
    </View>
  </View>
);

// export const Checkbox = ({value, onChange, label}) => (
//   <TouchableOpacity activeOpacity={0.8} style={styles.checkboxWrapper}>
//     <Text style={styles.checkboxLabel}>{label}</Text>
//     <CheckBox
//       boxType="square"
//       value={value}
//       onValueChange={onChange}
//       style={styles.checkbox}
//     />
//   </TouchableOpacity>
// );

const styles = StyleSheet.create({
  searchInputBox: {
    height: isAndroid ? ms(40) : ms(40),
  },
  searchIcon: {height: ms(16), width: ms(16), marginRight: ms(6)},
  searchContainer: {
    paddingLeft: ms(8),
    paddingRight: ms(8),
    // backgroundColor: Grey400,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wrapper: {
    marginBottom: ms(17),
  },
  label: {
    marginBottom: ms(6),
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    lineHeight: 22,
    // color: Grey900,
  },
  input: {
    borderRadius: ms(8),
    // borderColor: Grey500,
    borderWidth: 1,
    // color: Grey800,
    // width: ms(308),
    width: '100%',
    height: ms(43),
    paddingLeft: ms(17),
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 19,
  },
  error: {
    // borderColor: Red,
    borderWidth: 1,
    marginBottom: ms(6),
  },
  iconWrapper: {
    borderLeftColor: '#E5E7EB',
    borderLeftWidth: 1,
    position: 'absolute',
    right: 1,
    top: 40,
    paddingHorizontal: ms(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyesIcon: {
    marginTop: 2,
  },
  loader: {
    position: 'absolute',
    right: 14,
    top: 42,
    opacity: 0.4,
  },
  errorText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    // color: Red,
    marginBottom: ms(10),
  },
  successText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    // color: Green800,
    marginBottom: ms(10),
  },
  errorIcon: {
    position: 'absolute',
    right: 6,
    top: 44,
  },
  search: {
    borderWidth: 1,
    // borderColor: Grey500,
    borderRadius: 5,
    width: '100%',
    height: ms(43),
  },
  searchInput: {
    width: '100%',
    height: ms(43),
    paddingLeft: ms(19),
  },
  searchBox: {
    // backgroundColor: Grey400,
    width: ms(30),
    height: ms(32),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 8,
    top: 5,
  },
  formWrapper: {
    // marginVertical: ms(30),
    marginBottom: ms(30),
  },
  formLabel: {
    // color: Grey900,
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginBottom: ms(6),
  },
  currency: {
    // backgroundColor: Grey400,
    borderRadius: 5,
    width: ms(45),
    height: ms(33),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 7,
    top: 30,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    width: ms(20),
    height: ms(20),
  },
  checkboxLabel: {
    // color: Grey900,
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginBottom: ms(6),
  },
});
