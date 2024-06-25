import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Bot } from '../../../firebase/interface'
import { getBotByUserName } from '../../../firebase/bots'

const MyProfile: React.FC = () => {
  const { userName } = useParams<{ userName: string }>()
  const [botData, setBotData] = useState<Bot | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchBotData = async () => {
      try {
        if (userName !== undefined) {
          const bot = await getBotByUserName(userName);
          console.log('Bot:', bot);
          setBotData(bot);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false);
      }
    };

    fetchBotData(); // Call fetchBlog when component mounts or id changes

  }, [userName]);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {
        !loading && botData &&
        <div>
          <h1>{botData.name}</h1>
          <h1>{botData.id}</h1>
          <h1>{botData.userName}</h1>
          <h1>{botData.email}</h1>
          <h1>{botData.mobile}</h1>
          <h1>{botData.isPremium}</h1>
          <h1>{botData.coins.count}</h1>
          <h1>{botData.coins.date_of_expiry}</h1>
          <h1>{botData.isAdmin}</h1>
        </div>
      }
      {
        !loading && !botData &&
        <div>
          <h1>User not found</h1>
        </div>
      }
    </>
  )
}

export default MyProfile
