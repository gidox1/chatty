import { Box, Image, Text } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { MessageData, MessageStatus, SingleMessage } from '../types';
import { messages } from "../config/data";
import man from '../assets/man.png';
import { config } from "../config";

export const Card = () => {
  const data = messages;
  const [msg, setMsg] = useState<MessageData[]>([]);
  useEffect(() => {
    setMsg(data);
  }, []);

  const chatLabel = (text: string): string =>  text.slice(0, config.cardTextlimit);
  const getUnreadMsgCount = (msgs: SingleMessage[]): number => 
    msgs.filter(
      (m) => 
        m.status === MessageStatus.UNREAD
    ).length;

  return (
    <Fragment>
      {
        msg.length && msg.map((info, key) => (
          <Box display="flex" h="15%" w="full"  background="gray.bg" borderRadius="5px" cursor="pointer" key={key}>
            {
              //FIXME: This should maybe be none by default and be on user selection?
              key === 0 && (
                <Box w="1.5%" borderRadius="5px 0 0 5px" background="green.chat" h="100%"></Box>
              )
            }
            <Box display="flex" flexDirection="column" w="full" h="full" p="1% 0 0 2%" >
              <Box w="full" h="65%" display="flex" flexFlow="row">
                <Box w="17%" h="100%" borderRadius="50%" position='relative'>
                  <Image w="full" h="full" src={man}></Image>
                  <Box 
                    position="absolute" 
                    w="10px" h="10px" 
                    background="green.chat" 
                    borderRadius="50%" 
                    right="1"
                    top="10"
                  ></Box>
                </Box>
                <Box pl="5%" w="60%">
                  <Text fontSize={{
                    base: "15px",
                    md: "17px",
                    lg: "2xl"
                  }}>{info.username}</Text>
                  <Text fontSize="12px" color="gray">online</Text>
                </Box>
                <Box justifyContent="flex-end">
                  <Text fontSize="13px" pt="10%" float="right" color="gray">6:18 pm</Text>
                </Box>
              </Box>
                {
                  info.messages.length > 0 && (
                    <Box w="full" h="full" display="flex" flexFlow="row" justifyContent="space-between">
                      <Text 
                        fontSize="12.5px" 
                        p="1% 0 0 6%"
                      >
                        {
                          `${chatLabel(info.messages[info.messages.length - 1].content)}${
                              (info.messages[info.messages.length - 1].content.length < config.cardTextlimit) 
                              ? '' 
                              : '...'
                          }`
                        }
                      </Text>
                      <Box 
                        h={{
                          base: "65%",
                          sm: "40%",
                          md: "80%",
                          lg: "80%"
                        }} 
                        w={{
                          base: "8%",
                          md: "7%",
                          lg: "2%"
                        }}
                        borderRadius="50%" 
                        display="flex" 
                        pos="relative" 
                        justifyContent="center" 
                        background="green.bg" 
                        mr=".5rem"
                      >
                        <Text 
                          color="white" 
                          textAlign="center" 
                          m="auto"
                          pb="1px" 
                          pos="absolute"
                        >
                          {getUnreadMsgCount(info.messages)}
                        </Text>
                      </Box>
                    </Box>
                  )
                }
            </Box>
          </Box>
        ))
      }
    </Fragment>
  )
}
