import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import tw from "twrnc";

type IconNames =
  | "aperture-sharp"
  | "mail-unread"
  | "document"
  | "person"
  | "settings-sharp";
const accountData: { title: string; icon: IconNames }[] = [
  { title: "Help", icon: "aperture-sharp" },
  { title: "Payment", icon: "mail-unread" },
  { title: "Activity", icon: "document" },
];
const accountList: { title: string; icon: IconNames }[] = [
  { title: "Settings", icon: "settings-sharp" },
  { title: "Messages", icon: "mail-unread" },
  { title: "Earn by driving or delivering", icon: "document" },
  { title: "Set up your business profile", icon: "document" },
  { title: "Manage Uber account", icon: "person" },
  { title: "Legal", icon: "document" },
];

const Account = () => {
  return (
    <Container>
      <View style={tw`flex-row items-center justify-between`}>
        <View>
          <Title>John Doe</Title>
          <View
            style={tw`flex-row bg-black w-16 py-1 justify-between items-center px-2 rounded-lg`}
          >
            <TabBarIcon name="star" size={15} color={"white"} />
            <Text style={tw`text-base text-white`}>5.0</Text>
          </View>
        </View>
        <View
          style={tw`w-12 h-12 rounded-full bg-[#00000050] items-center justify-center`}
        >
          <TabBarIcon name="person" color="#dddddd" />
        </View>
      </View>
      <ScrollView
        style={tw`mt-3 mb-28`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={tw`flex-row items-center justify-between`}>
          {accountData?.map((item) => (
            <TouchableOpacity
              key={item?.title}
              style={tw`bg-black w-[30%] py-3 items-center justify-center rounded-lg`}
            >
              <TabBarIcon name={item?.icon} color={"white"} />
              <Text style={tw`text-white mt-3 font-medium`}>{item?.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={tw`mt-5`}>
          {accountList?.map((item) => (
            <TouchableOpacity
              key={item?.title}
              style={tw`flex-row items-center mb-3 bg-gray-100 py-1 px-2`}
            >
              <TabBarIcon name={item?.icon} size={20} />
              <Text style={tw`text-lg font-medium ml-3`}>{item?.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={tw`text-sm font-semibold mt-2`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          excepturi? Inventore fugiat incidunt, omnis aperiam placeat explicabo
          ex aspernatur laborum quo dolor odit? Minus aut voluptas doloribus
          temporibus minima dolore cum quos, earum ratione distinctio obcaecati
          magni sunt quas quisquam quasi ullam nam illum, aliquid quidem
          voluptatibus, id porro atque. Dolor sit ab neque ipsum illum. Ducimus
          aliquid reprehenderit, error tempore illo sunt, delectus nesciunt
          similique ullam expedita odio? Deserunt at excepturi harum saepe
          deleniti molestias non! Mollitia quo repudiandae, recusandae nulla cum
          obcaecati, facilis earum soluta iure nesciunt quia explicabo commodi.
          Iure repudiandae optio atque qui commodi omnis? Corrupti libero
          reiciendis numquam at eius quasi omnis velit, accusamus rem, nostrum
          rerum? Perspiciatis optio error reiciendis! Deserunt vel corrupti
          similique quam architecto impedit porro temporibus facilis, natus
          ipsa, assumenda earum possimus corporis necessitatibus fuga, quas a
          qui ea quasi numquam consectetur. Laboriosam, molestiae explicabo quod
          tempore quia sed soluta voluptas nulla cum quis veritatis consectetur
          quaerat perspiciatis magni natus modi nostrum omnis dolor nam ullam
          corporis temporibus tenetur? Provident perferendis, non quas numquam
          quo cum corporis dolore corrupti nesciunt molestiae, aspernatur, nemo
          maiores laborum fugiat laboriosam facere laudantium iusto
          exercitationem. Reprehenderit eum atque quasi esse aperiam mollitia
          quod, ullam odit iste veritatis omnis. Quas soluta dignissimos alias
          provident quam numquam voluptatem placeat officia vero doloremque,
          fuga, sint expedita incidunt perferendis pariatur temporibus iste non
          minima recusandae? Nobis rem enim repellat, molestias tenetur
          excepturi eos iusto? Eos expedita, neque voluptatum temporibus a aut
          est autem tempore laudantium laboriosam, nulla eveniet aperiam! Nemo
          dicta tempore necessitatibus temporibus soluta cumque reiciendis ea
          provident maiores omnis a quae adipisci, id est cum quia dolores
          consectetur ad corporis cupiditate numquam iusto amet. Maiores quia
          tempore error amet suscipit modi accusamus iusto, optio perspiciatis
          facere officia eaque inventore eos, atque alias et aut doloribus quasi
          ex?
        </Text>
      </ScrollView>
    </Container>
  );
};

export default Account;
