import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bot, Coins } from '../../../firebase/interface';
import { getBotByUserName, updateBot } from '../../../firebase/bots';

const MyProfile: React.FC = () => {
  const { userName } = useParams<{ userName: string }>();
  const [botData, setBotData] = useState<Bot | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [formData, setFormData] = useState<Partial<Bot>>({
    name: '',
    userName: '',
    bio: '',
    mobile: '',
    email: '',
    image: '',
    password: '',
    isPremium: false,
    coins: { count: 0, date_of_expiry: '' },
    isAdmin: false,
    date_of_creation: '',
  });

  useEffect(() => {
    const fetchBotData = async () => {
      try {
        if (userName !== undefined) {
          const bot = await getBotByUserName(userName);
          console.log('Bot:', bot);
          setBotData(bot);
          if (bot) {
            setFormData({
              name: bot.name || '',
              userName: bot.userName || '',
              bio: bot.bio || '',
              mobile: bot.mobile || '',
              email: bot.email || '',
              image: bot.image || '',
              password: bot.password || '',
              isPremium: bot.isPremium || false,
              coins: bot.coins || { count: 0, date_of_expiry: '' },
              isAdmin: bot.isAdmin || false,
              date_of_creation: bot.date_of_creation || '',
            });
          }
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bot:', error);
        setLoading(false);
      }
    };

    fetchBotData(); // Call fetchBotData when component mounts or userName changes

  }, [userName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveProfile = async () => {
    try {
      if (!botData || !botData.userName) return;

      const updatedBot: Bot = {
        ...botData,
        ...formData,
      };

      await updateBot(botData.userName, updatedBot);
      console.log('Bot profile updated successfully.');

      // Optional: Update botData state if needed
      setBotData(updatedBot);

      // You can add additional success handling here

    } catch (error) {
      console.error('Error updating bot profile:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const isAdmin = botData?.isAdmin || false;

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && botData && (
        <div>
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src={formData.image || 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'}
                    alt="Profile"
                  />
                  <span className="font-weight-bold">{formData.name}</span>
                  <span className="text-black-50">{formData.email}</span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                        readOnly={!isAdmin} // Readonly if not admin
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Bio</label>
                      <textarea
                        className="form-control"
                        placeholder="Bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        readOnly={!isAdmin} // Readonly if not admin
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        readOnly={!isAdmin} // Readonly if not admin
                      />
                    </div>
                  </div>
                  {isAdmin && (
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="labels">Is Premium?</label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="isPremium"
                          checked={formData.isPremium}
                          onChange={(e) => setFormData({ ...formData, isPremium: e.target.checked })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Admin?</label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="isAdmin"
                          checked={formData.isAdmin}
                          onChange={(e) => setFormData({ ...formData, isAdmin: e.target.checked })}
                        />
                      </div>
                    </div>
                  )}
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Date of Creation</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Date of Creation"
                        name="date_of_creation"
                        value={formData.date_of_creation}
                        onChange={handleInputChange}
                        readOnly={!isAdmin} // Readonly if not admin
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Image URL</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Image URL"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                      <button
                        className="btn btn-primary profile-button"
                        type="button"
                        onClick={handleSaveProfile}
                      >
                        Save Profile
                      </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center coins">
                    <span>Edit Coins</span>
                  </div>
                  <div className="col-md-12 mt-3">
                    <label className="labels">Coins Count</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Coins Count"
                      name="count"
                      value={formData.coins?.count || '0'}
                      onChange={(e) => {
                        if (isAdmin && formData.coins) {
                          setFormData({
                            ...formData,
                            coins: { ...formData.coins, count: Number(e.target.value) },
                          })
                        }
                      }}
                      readOnly={!isAdmin} // Readonly if not admin
                    />
                  </div>
                  <div className="col-md-12 mt-3">
                    <label className="labels">Coins Expiry Date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coins Expiry Date"
                      name="date_of_expiry"
                      value={formData.coins?.date_of_expiry || '0'}
                      onChange={(e) => {
                        if (isAdmin && formData.coins) {
                          setFormData({
                            ...formData,
                            coins: { ...formData.coins, date_of_expiry: e.target.value },
                          });
                        }
                      }}
                      readOnly={!isAdmin} // Readonly if not admin
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!loading && !botData && (
        <div>
          <h1>User not found</h1>
        </div>
      )}
    </>
  );
};

export default MyProfile;
