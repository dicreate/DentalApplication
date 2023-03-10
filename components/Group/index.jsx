import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled from 'styled-components/native'

const Group = ({title, items}) => {
return (
   <GroupContainer>
         <GroupTitle>
            {title}
         </GroupTitle>
         {items.map(item => <GroupItem>
            <Avatar source={{
               uri: item.user.avatar
               }}>
            </Avatar>
            <View style= {{style: 'flex: 1'}}>
               <FullName>{item.user.fullname}</FullName>
               <GrayText>{item.user.diagnosis}</GrayText>
            </View>
            <GroupDate active = {item.active}>
               {item.time}
            </GroupDate>
         </GroupItem>)}
      </GroupContainer>
   );
   
}

Group.defaultProps = {
   groupTitle: 'Untitled',
   items: []
}

const GroupDate = styled.Text`
  background: ${props => (props.active ? '#2A86FF' : '#e9f5ff')}
  color: ${props => (props.active ? '#fff' : '#4294FF')}
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 28px;
  margin-left: auto;
  
`;

const GrayText = styled.Text`
  font-size: 16px;
  color: #8B979F;
`;

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
  borderBottomWidth: 1px;
  borderBottomColor: #f3f3f3;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;

  `;

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000
`;



const GroupContainer = styled.View`
  padding: 0 20px;
  margin-bottom: 20px;
`;


export default Group