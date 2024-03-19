import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
} from 'react-native';

import {ms} from './utils';
import {isAndroid} from '@utils';
import {Black, RitualCyan400} from './Colors';
import magnifyingglass from 'assets/images/magnifyingglass.png';

interface InputProps {
  value?: string;
  placeholder?: string;
  keyboardType?: 'phone-pad' | 'default' | 'email-address' | 'numeric';
  capitalize?: 'sentences' | 'none' | 'words' | 'characters' | undefined;
  style?: {};
  inputStyle?: {};
  onChange: (value: string | object) => void;
  onBlur?: () => void;
  singular?: boolean;
  canSearch?: boolean;
  returnKeyType?: 'done' | 'next';
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
}

export const SearchInputBox = ({
  placeholder,
  value,
  onChange,
  style,
  inputStyle,
  onSubmitEditing,
}: InputProps) => (
  <View style={[styles.searchContainer, style]}>
    <Image style={styles.searchIcon} source={magnifyingglass} />
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
      cursorColor={Black}
    />
  </View>
);

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
});
