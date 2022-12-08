import React, { useEffect, useState } from "react";
import { uuid } from 'uuidv4'; 

const MenuMaker = () => {
    const [restaurant, setRestaurant] = useState<Restaurant>();
    const [result, setResult] = useState(JSON.stringify(restaurant, null, 2));
    
    const [edit, setEdit] = useState(false);
    const [input, setInput] = useState('');
    const [rewardItemInput, setRewardItemInput] = useState('');
    
    useEffect(() => {
       setResult(JSON.stringify(restaurant, null, 2));  
    }, [restaurant]);
    
    const handleJson = () => {
        try {
            setRestaurant(JSON.parse(input));
            setEdit(true);
        }
        catch(e) {
            console.log(e); 
            return; 
        }
    }
    
    const updateRestaurant = (category : MenuCategory, originalId : string) => {
        if(!restaurant || !restaurant.menu) return; 
        const index = restaurant.menu.findIndex((i) => i.id === originalId); 
        if(index  < 0) return; 
        const newMenu = [...restaurant.menu];
        newMenu[index] = category; 
        setRestaurant({
            ...restaurant, 
            menu: newMenu, 
        });
    }
    
    const updateRewardItem = (item : MenuItem, originalId : string) => {
        if(!restaurant || !restaurant.rewardItems) return; 
        const index = restaurant?.rewardItems?.findIndex((i) => i.id === originalId); 
        if(index  < 0) return; 
        const newRewards = [...restaurant.rewardItems];
        newRewards[index] = item; 
        setRestaurant({
            ...restaurant, 
            rewardItems: newRewards
        });
    }
    
    const removeCategory = (id : string) => {
        const newMenu = restaurant?.menu?.filter((i) => i.id !== id); 
        if(!newMenu || !restaurant) return; 
        setRestaurant({
            ...restaurant, 
            menu: newMenu, 
        });
    }
    
    const handleRemoveRewardItem = (id : string) => {
        if(!restaurant || !restaurant.menu) return; 
        const newRewards = restaurant.rewardItems?.filter((i) => i.id !== id); 
        if(!newRewards) return; 
        setRestaurant({
            ...restaurant, 
            rewardItems: newRewards
        });
    }
        
    const findMenuItem = (id : string) => {
        if(!restaurant || !restaurant.menu) return; 
        const allItems = restaurant.menu.flatMap((category) => category.menuItems); 
        return allItems.find((item) => item.id === id);
    }
    
    const handleCreateRewardItem = () => {
        if(!restaurant) return;
        if(!restaurant.rewardItems) {
            setRestaurant({...restaurant, rewardItems: []});
            return; 
        } 
        const existingRewardItem = findMenuItem(rewardItemInput);
        setRewardItemInput('');
        if(!existingRewardItem || !existingRewardItem.reward) return; 
        const newMenuItem : MenuItem = {
           name: "PLACEHOLDER", 
           price: existingRewardItem.price, 
           taxRate: existingRewardItem.taxRate, 
           id: uuid(), 
           reward: {
            discount: existingRewardItem.reward.discount, 
            discountText: existingRewardItem.reward.discountText, 
            points: existingRewardItem.reward.points, 
           }, 
           itemChoices: [existingRewardItem], 
        }; 
        const newRewards = [...restaurant.rewardItems];
        newRewards.push(newMenuItem);
        setRestaurant({
            ...restaurant, 
            rewardItems: newRewards
        });
    }

    const handleCreateWithId = () => {
        if(!restaurant) return;
        if(!restaurant.rewardItems) {
            setRestaurant({...restaurant, rewardItems: []});
            return; 
        } 
        const existingRewardItem = findMenuItem(rewardItemInput);
        setRewardItemInput('');
        if(!existingRewardItem || !existingRewardItem.reward) return; 
        const newRewards = [...restaurant.rewardItems];
        newRewards.push(existingRewardItem);
        setRestaurant({
            ...restaurant, 
            rewardItems: newRewards
        });
    }
    
    const createCategory = () => {
        if(!restaurant) return; 
        if(!restaurant.menu) {
            setRestaurant({...restaurant, menu: []});
            return; 
        }
        const availability = []; 
        for(let i = 0; i < 7; i++) {
            availability.push({
                enabled: true, 
                dayOfWeek: i, 
                timePeriods: [
                    {
                        startTime: '00:00', 
                        endTime: '00:00', 
                    }
                ]
            });
        }
        const newCategory : MenuCategory = {
            name: "PLACEHOLDER", 
            id: uuid(), 
            menuItems: [], 
            availability: availability, 
        }
        const arr = restaurant.menu; 
        arr.push(newCategory);
        setRestaurant({...restaurant, menu: arr});
    }
    
    return (
        <div>
            {!edit ? 
            <form style={{padding: 20}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <label>
                        Enter a restaurant JSON 
                    </label>
                    <textarea style={{margin: 10, height: 400, borderWidth: 1}} onChange={(event) => setInput(event.currentTarget.value)}></textarea>
                    <input value='Edit' type='button' onClick={() => handleJson()} />
                </div>
                
            </form> : 
            <div style={{padding: 20, display: 'flex', flexDirection: 'column'}}>
                <text style={{fontSize: 20, fontWeight: '700'}}>{restaurant?.name}</text>
                <text style={{fontSize: 16}}>{restaurant?.id}</text>
                <text style={{fontSize: 18, marginTop: 20, fontWeight: '500'}}>Menu</text>
                <div style={{marginBottom: 20}}>
                    {restaurant?.menu?.map((category) => 
                    <MenuCategoryRow category={category} 
                                    key={category.id}
                                    updateRestaurant={updateRestaurant}
                                    removeCategory={removeCategory}
                                    findItem={findMenuItem}/>)}
                    <button onClick={createCategory}>Create Category</button>
                </div>
                        
                <text style={{fontSize: 18, marginTop: 20, fontWeight: '500'}}>Reward Items</text>
                <div style={{marginBottom: 20}}>
                    {restaurant?.rewardItems?.map((rewardItem) => rewardItem.itemChoices ? 
                    <MenuItemRow item={rewardItem} 
                                key={rewardItem.id}
                                updateMenuCategory={updateRewardItem} 
                                removeItem={handleRemoveRewardItem}
                                findItem={findMenuItem}/> : 
                    <RewardItemRow key={rewardItem.id} 
                                item={rewardItem} 
                                removeItem={handleRemoveRewardItem}/>)}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <input style={{borderWidth: 2}} value={rewardItemInput} onChange={(event) => setRewardItemInput(event.currentTarget.value)}/>
                        <button onClick={handleCreateWithId}>Add Reward Item from Existing</button>
                        <button onClick={() => handleCreateRewardItem()}>Create Reward Item & Add as Item Choice</button>
                    </div>
                    
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <text style={{fontSize: 20, fontWeight: '500'}}>Result</text> 
                    <textarea style={{height: 400, borderWidth: 2}} defaultValue={result} readOnly={true}></textarea>
                </div>
            </div>}
        </div>
    );
}

export default MenuMaker; 

type MenuCategoryRowProps = {
    category: MenuCategory; 
    updateRestaurant: (category : MenuCategory, originalId: string) => void; 
    removeCategory: (id: string) => void; 
    findItem: (id: string) => MenuItem | undefined; 
}
const MenuCategoryRow = ({category, updateRestaurant, removeCategory, findItem} : MenuCategoryRowProps) => {
    const [newCategory, setNewCategory] = useState(category); 
    const [enabled, setEnabled] = useState(false);
    
    const handleEditItem = (item : MenuItem, originalId : string) => {
        const index = newCategory.menuItems.findIndex((i) => i.id === originalId); 
        if(index  < 0) return; 
        const menuItems = newCategory.menuItems; 
        menuItems[index] = item; 
        const updatedCategory = {...newCategory, menuItems: menuItems}; 
        setNewCategory(updatedCategory);
        updateRestaurant(updatedCategory, category.id);
    }
    const handleCreateItem = () => {
        const newMenuItem : MenuItem = {
           name: "PLACEHOLDER", 
           price: 0, 
           taxRate: 0, 
           id: uuid(), 
        }; 
        const menuItems = newCategory.menuItems; 
        menuItems.push(newMenuItem);
        const updatedCategory = {...newCategory, menuItems: menuItems}; 
        setNewCategory(updatedCategory);
        updateRestaurant(updatedCategory, category.id);
    }
    
    const handleRemoveItem = (id : string) => {
        const menuItems = newCategory.menuItems.filter((i) => i.id !== id);
        const updatedCategory = {...newCategory, menuItems: menuItems}; 
        setNewCategory(updatedCategory);
        updateRestaurant(updatedCategory, category.id);
    }
    
    const updateAvailability = (availability : Availability) => {
        const arr = newCategory.availability; 
        arr[availability.dayOfWeek] = availability; 
        const updatedCategory = {...newCategory, availability: arr}; 
        setNewCategory(updatedCategory);
        updateRestaurant(updatedCategory, category.id);
    }
    
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <text style={{width: 300}}>{newCategory.name}</text>
                <button onClick={() => {setEnabled(!enabled); updateRestaurant(newCategory, category.id)}}>Edit</button>
                <button onClick={() => removeCategory(category.id)}>Delete Category</button>
            </div>
            {enabled && <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 20}}>
                <div style={{flexDirection: 'row'}}>
                    <label>Category Name: </label>
                    <input style={{borderWidth: 2, width: 100}} defaultValue={newCategory.name} onChange={(event) => {setNewCategory({...newCategory, name: event.currentTarget.value})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>ID: </label>
                    <input style={{borderWidth: 2, width: 100}} readOnly={true} defaultValue={newCategory.id} onChange={(event) => {setNewCategory({...newCategory, id: event.currentTarget.value})}}/>
                </div>
                <text>Items</text>
                <div style={{marginLeft: 20}}>
                    {newCategory.menuItems.map((item) => (
                        <MenuItemRow item={item} 
                                    key={item.id}
                                    updateMenuCategory={handleEditItem}
                                    removeItem={handleRemoveItem}
                                    findItem={findItem} />
                    ))}
                </div>
                
                <button onClick={handleCreateItem}>Add item</button>
                <text>Availability</text>
                <div style={{marginLeft: 20}}>
                    {newCategory.availability.map((day) => (
                        <AvailabilityRow availability={day}
                                        updateAvailability={updateAvailability}/>
                    ))}
                </div>
                <button onClick={() => updateRestaurant(newCategory, category.id)}>Save</button>
            </div>}
        </div>
        
    );
}

type MenuItemRowProps = {
    item: MenuItem; 
    updateMenuCategory: (item : MenuItem, originalId: string) => void; 
    removeItem: (id : string) => void; 
    findItem: (id : string) => MenuItem | undefined; 
}
const MenuItemRow = ({item, updateMenuCategory, removeItem, findItem} : MenuItemRowProps) => {
    const [newMenuItem, setNewMenuItem] = useState(item);
    const [enabled, setEnabled] = useState(false);
    const [isReward, setIsReward] = useState(item.reward !== undefined);
    const [hasChoices, setHasChoices] = useState(item.itemChoices !== undefined);
    const [itemChoiceId, setItemChoiceId] = useState('');
    const [choices, setChoices] = useState<string[]>(item.itemChoices?.map((it) => it.id) ?? []);
    const [hasOptions, setHasOptions] = useState(item.foodOptions !== undefined);
    
    const enableRewardItem = (b : boolean) => {
        const reward = b ? {
            discount: 0, 
            discountText: '', 
            points: 1, 
        } : undefined; 
        setNewMenuItem({...newMenuItem, reward: reward});
        setIsReward(b);
    }
    const enableChoices = (b : boolean) => {
        const itemChoices = b ? [] : undefined; 
        setNewMenuItem({...newMenuItem, itemChoices: itemChoices});
        setHasChoices(b);
    }
    const addChoice = () => {
        const id = itemChoiceId; 
        setItemChoiceId('');
        const item = findItem(id);
        if(!item || choices.includes(id)) return; 
        choices.push(item.id); 
    }
    
    const removeChoice = (id : string) => {
        setChoices(choices.filter((s) => s !== id));
    }
    
    const enableOptions = (b : boolean) => {
        const foodOptions = b ? [] : undefined; 
        setNewMenuItem({...newMenuItem, foodOptions: foodOptions});
        setHasOptions(b);
    }
    
    const addOption = () => {
        
    }
    
    const handleSave = () => {
        let updatedItem = newMenuItem; 
        if(newMenuItem.itemChoices) {
            const itemChoices : MenuItem[] = []; 
            choices.forEach((choice) => {
                const item = findItem(choice);
                if(item) itemChoices.push(item);
            });
            updatedItem = {...newMenuItem, itemChoices: itemChoices}; 
            setNewMenuItem(updatedItem); 
        }
        updateMenuCategory(updatedItem, item.id); 
    }
    
    const removeFoodOption = (id : string) => {
        if(!newMenuItem.foodOptions) return;
        const arr = newMenuItem.foodOptions.filter((op) => op.id !== id);
        const updatedItem = {...newMenuItem, foodOptions: arr};
        setNewMenuItem(updatedItem); 
        updateMenuCategory(updatedItem, item.id); 
    }
    
    const updateFoodOption = (foodOption : FoodOption) => {
        if(!newMenuItem.foodOptions) return;
        const index = newMenuItem.foodOptions.findIndex((op) => op.id === foodOption.id);
        if(index < 0) return; 
        const arr = newMenuItem.foodOptions; 
        arr[index] = foodOption; 
        const updatedMenuItem = {...newMenuItem, foodOption: arr};
        setNewMenuItem(updatedMenuItem);
        updateMenuCategory(updatedMenuItem, item.id);  
    }
    
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <text style={{width: 300}}>{newMenuItem.name}</text>
                <button onClick={() => {setEnabled(!enabled); updateMenuCategory(newMenuItem, item.id)}}>Edit</button>
                <button onClick={() => removeItem(item.id)}>Delete Item</button>
            </div>
            {enabled && <div style={{display: 'flex', flexDirection: 'column', width: '100%', marginLeft: 20}}>
                <div style={{flexDirection: 'row'}}>
                    <label>Item Name: </label>
                    <input style={{borderWidth: 2, width: 100}} defaultValue={newMenuItem.name} onChange={(event) => {newMenuItem.name = event.currentTarget.value}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>ID: </label>
                    <input style={{borderWidth: 2, width: 100}} readOnly={true} defaultValue={newMenuItem.id} onChange={(event) => {setNewMenuItem({...newMenuItem, id: event.currentTarget.value})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Description: </label>
                    <input style={{borderWidth: 2, width: 100}} defaultValue={newMenuItem.description} onChange={(event) => {setNewMenuItem({...newMenuItem, description: (event.currentTarget.value.length) > 0 ? event.currentTarget.value : undefined})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Image: </label>
                    <input style={{borderWidth: 2, width: 100}} defaultValue={newMenuItem.image} onChange={(event) => {setNewMenuItem({...newMenuItem, image: event.currentTarget.value.length > 0 ? event.currentTarget.value : undefined})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Is Alcohol: </label>
                    <input style={{borderWidth: 2, width: 100}} defaultValue={newMenuItem.isAlcohol?.toString()} onChange={(event) => {setNewMenuItem({...newMenuItem, isAlcohol: event.currentTarget.value === 'true'})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Price: </label>
                    <input style={{borderWidth: 2, width: 100}} type='number' defaultValue={newMenuItem.price} onChange={(event) => {setNewMenuItem({...newMenuItem, price: +event.currentTarget.value})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Tax Rate: </label>
                    <input style={{borderWidth: 2, width: 100}} type='number' defaultValue={newMenuItem.taxRate} onChange={(event) => {setNewMenuItem({...newMenuItem, taxRate: +event.currentTarget.value})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Reward Item: </label>
                    <input type='checkbox' checked={isReward} onChange={(event) => enableRewardItem(!isReward)}></input>
                    {isReward && <div style={{marginLeft: 20}}>
                        <div style={{flexDirection: 'row'}}>
                            <label>Discount: </label>
                            <input style={{borderWidth: 2, width: 100}} type='number' defaultValue={newMenuItem.reward?.discount} onChange={(event) => {if(newMenuItem.reward) setNewMenuItem({...newMenuItem, reward: {...newMenuItem.reward, discount: +event.currentTarget.value}})}}/>
                        </div>
                        <div style={{flexDirection: 'row'}}>
                            <label>Discount Text: </label>
                            <input style={{borderWidth: 2, width: 100}} defaultValue={newMenuItem.reward?.discountText} onChange={(event) => {if(newMenuItem.reward) setNewMenuItem({...newMenuItem, reward: {...newMenuItem.reward, discountText: event.currentTarget.value}})}}/>
                        </div>
                        <div style={{flexDirection: 'row'}}>
                            <label>Points: </label>
                            <input style={{borderWidth: 2, width: 100}} type='number' defaultValue={newMenuItem.reward?.points} onChange={(event) => {if(newMenuItem.reward) setNewMenuItem({...newMenuItem, reward: {...newMenuItem.reward, points: +event.currentTarget.value}})}}/>
                        </div>
                    </div>}
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Item Choices: </label>
                    <input type='checkbox' checked={hasChoices} onChange={(event) => enableChoices(!hasChoices)}></input>
                    {hasChoices && <div style={{marginLeft: 20}}>
                        {choices.map((choice) => (
                            <MenuItemChoice choiceId={choice} 
                                            key={choice}
                                            findItem={findItem}
                                            removeChoice={removeChoice} />
                        ))}
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <label>ID: </label>
                            <input style={{borderWidth: 2, width: 100}} value={itemChoiceId} onChange={(event) => {setItemChoiceId(event.currentTarget.value)}}/>
                            
                        </div>
                        <button onClick={() => addChoice()}>Add Item Choice</button>
                    </div>}
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Options: </label>
                    <input type='checkbox' checked={hasOptions} onChange={(event) => enableOptions(!hasOptions)}></input>
                    {hasOptions && <div style={{marginLeft: 20}}>
                        {newMenuItem.foodOptions?.map((foodOption) => (
                            <FoodOptionRow foodOption={foodOption} 
                                        key={foodOption.id}
                                        removeFoodOption={removeFoodOption}
                                        updateItem={updateFoodOption}/>
                        ))}
                        <button onClick={() => addOption()}>Add Food Option</button>
                    </div>}
                </div>
                <button onClick={() => handleSave()}>Save</button>
            </div>}
        </div>
    );
}

type MenuItemChoiceProps = {
    choiceId: string; 
    removeChoice: (id : string) => void; 
    findItem: (id : string) => MenuItem | undefined; 
}

const MenuItemChoice = ({choiceId, removeChoice, findItem} : MenuItemChoiceProps) => {
    
    const [choice, setChoice] = useState(findItem(choiceId)); 
    
    useEffect(() => {
        if(!choice) {
            removeChoice(choiceId); 
        }
    }, [choice]);
    
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <text>{choice?.name}</text>
            <text>{choice?.id}</text>
            <button onClick={() => removeChoice(choiceId)}>Remove</button>
        </div>
    );
}

type RewardItemRowProps = {
    item: MenuItem; 
    removeItem: (id: string) => void; 
}
const RewardItemRow = ({item, removeItem} : RewardItemRowProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <text>{item.name}</text>
            <text>{item.id}</text>
            <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
    ); 
}

type FoodOptionRowProps = {
    foodOption : FoodOption; 
    updateItem : (foodOption : FoodOption) => void; 
    removeFoodOption : (id : string) => void; 
}
const FoodOptionRow = ({foodOption, updateItem, removeFoodOption} : FoodOptionRowProps) => {
    const [enabled, setEnabled] = useState(false); 
    const [newFoodOption, setNewFoodOption] = useState(foodOption);
    
    const createOption = () => {
        const newOption : Option = {
            name: "PLACEHOLDER", 
            id: uuid(), 
            price: 0, 
            points: 0,
            suspendUntil: undefined
        }; 
        const arr = newFoodOption.options; 
        arr.push(newOption);
        const updatedFoodOption = {...newFoodOption, options: arr}; 
        setNewFoodOption(updatedFoodOption);
        updateItem(updatedFoodOption);
    }
    
    const removeOption = (id : string) => {
        const arr = newFoodOption.options.filter((op) => op.id !== id); 
        const updatedFoodOption = {...newFoodOption, options: arr}; 
        setNewFoodOption(updatedFoodOption);
        updateItem(updatedFoodOption);
    }
    
    const updateOption = (option : Option) => {
        const index = newFoodOption.options.findIndex((op) => op.id === option.id); 
        if(index < 0) return; 
        const arr = newFoodOption.options; 
        arr[index] = option; 
        const updatedFoodOption = {...newFoodOption, options: arr}; 
        setNewFoodOption(updatedFoodOption);
        updateItem(updatedFoodOption);
    }
    
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <text style={{width: 300}}>{newFoodOption.name}</text>
                <button onClick={() => {setEnabled(!enabled); updateItem(newFoodOption)}}>Edit</button>
                <button onClick={() => removeFoodOption(foodOption.id)}>Delete Item</button>
            </div>
            {enabled && <div style={{marginLeft: 20}}>
                <div style={{flexDirection: 'row'}}>
                    <label>Name: </label>
                    <input style={{borderWidth: 2, width: 100}} defaultValue={foodOption.name} onChange={(event) => {setNewFoodOption({...newFoodOption, name: event.currentTarget.value})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>ID: </label>
                    <input style={{borderWidth: 2, width: 100}} readOnly={true} defaultValue={foodOption.id} onChange={(event) => {setNewFoodOption({...newFoodOption, id: event.currentTarget.value})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Number Choices: </label>
                    <input style={{borderWidth: 2, width: 100}} type='number' defaultValue={foodOption.numChoices} onChange={(event) => {setNewFoodOption({...newFoodOption, numChoices: (event.currentTarget.value.length > 0) ? +event.currentTarget.value : undefined})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Min Choices: </label>
                    <input style={{borderWidth: 2, width: 100}} type='number' defaultValue={foodOption.minChoices} onChange={(event) => {setNewFoodOption({...newFoodOption, minChoices: (event.currentTarget.value.length > 0) ? +event.currentTarget.value : undefined})}}/>
                </div>
                <input type='checkbox' checked={newFoodOption.required} onChange={(event) => setNewFoodOption({...newFoodOption, required: !newFoodOption.required})}/>
                <div style={{flexDirection: 'row'}}>
                    <label>Options: </label>
                    <div style={{marginLeft: 20}}>
                        {newFoodOption.options.map((option) => (
                            <OptionRow option={option}
                                    removeOption={removeOption}
                                    updateOption={updateOption}/>
                        ))}
                    </div>
                    <button onClick={createOption}>Create Option</button>
                </div>
                <button onClick={() => updateItem(newFoodOption)}>Save</button>
            </div>}
        </div>
    );
}

type OptionRowProps = {
    option : Option; 
    removeOption : (id : string) => void; 
    updateOption : (option : Option) => void; 
}
const OptionRow = ({option, removeOption, updateOption} : OptionRowProps) => {
    const [enabled, setEnabled] = useState(false); 
    const [newOption, setNewOption] = useState(option);
    
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <text style={{width: 300}}>{option.name}</text>
                <button onClick={() => {setEnabled(!enabled); updateOption(newOption)}}>Edit</button>
                <button onClick={() => removeOption(option.id)}>Delete Item</button>
            </div>
            {enabled && <div style={{marginLeft: 20}}>
                <div style={{flexDirection: 'row'}}>
                    <label>Name: </label>
                    <input style={{borderWidth: 2, width: 100}} defaultValue={option.name} onChange={(event) => {setNewOption({...newOption, name: event.currentTarget.value})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>ID: </label>
                    <input style={{borderWidth: 2, width: 100}} readOnly={true} defaultValue={option.id} onChange={(event) => {setNewOption({...newOption, id: event.currentTarget.value})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Price: </label>
                    <input style={{borderWidth: 2, width: 100}} type='number' defaultValue={option.price} onChange={(event) => {setNewOption({...newOption, price: (event.currentTarget.value.length > 0) ? +event.currentTarget.value : undefined})}}/>
                </div>
                <div style={{flexDirection: 'row'}}>
                    <label>Points: </label>
                    <input style={{borderWidth: 2, width: 100}} type='number' defaultValue={option.points} onChange={(event) => {setNewOption({...newOption, points: (event.currentTarget.value.length > 0) ? +event.currentTarget.value : undefined})}}/>
                </div>
                <button onClick={() => updateOption(newOption)}>Save</button>
            </div>}
        </div>
    );
}

type Availability = {
    enabled: boolean;
    dayOfWeek: number;
    timePeriods: TimePeriod[];
}
type TimePeriod = {
    startTime: string;
    endTime: string;
}

type AvailabilityRowProp = {
    availability: Availability; 
    updateAvailability: (availability: Availability) => void; 
}
const AvailabilityRow = ({availability, updateAvailability} : AvailabilityRowProp) => {
    const [newAvailability, setNewAvailability] = useState(availability);
    const [enabled, setEnabled] = useState(false);
    
    const createTimePeriod = () => {
        const newTimePeriod = {
            startTime: "00:00", 
            endTime: "00:00", 
        }
        const newTimePeriods = newAvailability.timePeriods; 
        newTimePeriods.push(newTimePeriod);
        const updatedAvailability = {...availability, timePeriods: newTimePeriods}; 
        setNewAvailability(updatedAvailability);
        updateAvailability(updatedAvailability);
    }
    const removeTimePeriod = (index : number) => {
        const newTimePeriods = newAvailability.timePeriods; 
        newTimePeriods.splice(index, 1);
        const updatedAvailability = {...availability, timePeriods: newTimePeriods}; 
        setNewAvailability(updatedAvailability);
        updateAvailability(updatedAvailability);
    }
    
    const updateTimePeriod = (timePeriod : TimePeriod, index : number) => {
        const newTimePeriods = newAvailability.timePeriods; 
        newTimePeriods[index] = timePeriod; 
        const updatedAvailability = {...availability, timePeriods: newTimePeriods}; 
        setNewAvailability(updatedAvailability);
        updateAvailability(updatedAvailability);
    }
    
    const enableTime = (b : boolean) => {
        const updatedAvailability = {...newAvailability, enabled: !newAvailability.enabled}; 
        setNewAvailability(updatedAvailability); 
        updateAvailability(updatedAvailability);
    }
    
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <text>Day of Week: {newAvailability.dayOfWeek}</text>
                <button onClick={() => {setEnabled(!enabled); updateAvailability(newAvailability);}}>Edit</button>
            </div> 
           {enabled && <div style={{marginLeft: 20, display: 'flex', flexDirection: 'column'}}>
                <div style={{flexDirection: 'row'}}>
                    <label>Enabled: </label>
                    <input type='checkbox' checked={newAvailability.enabled} onChange={(event) => enableTime(!availability.enabled)}/>
                </div>
                <text>Time Periods</text>
                <div style={{marginLeft: 20}}>
                    {newAvailability.timePeriods.map((per, i) => (
                        <div key={i}>
                            <div style={{flexDirection: 'row'}}>
                                <label>Start Time: </label>
                                <input style={{borderWidth: 2, width: 100}} defaultValue={per.startTime} onChange={(event) => {updateTimePeriod({...per, startTime: event.currentTarget.value}, i)}}/>
                            </div>
                            <div style={{flexDirection: 'row'}}>
                                <label>End Time: </label>
                                <input style={{borderWidth: 2, width: 100}} defaultValue={per.endTime} onChange={(event) => {updateTimePeriod({...per, endTime: event.currentTarget.value}, i)}}/>
                            </div>
                            <button onClick={() => removeTimePeriod(i)}>Remove Period</button>
                        </div>
                    ))}
                </div>
                
                <button onClick={createTimePeriod}>Add Time Period</button>
            </div>}
        </div>
    );
}