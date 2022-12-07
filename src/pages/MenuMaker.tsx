import React, { useEffect, useState } from "react";

const MenuMaker = () => {
    let restaurant : Restaurant; 
    
    const [edit, setEdit] = useState(false);
    
    const handleJson = (input : string) => {
        restaurant = JSON.parse(input);
    }
    
    const updateRestaurant = (category : MenuCategory, originalId : string) => {
        if(!restaurant || !restaurant.menu) return; 
        const index = restaurant.menu.findIndex((i) => i.id === originalId); 
        if(!index || index  < 0) return; 
        restaurant.menu[index] = category; 
    }
    
    const updateRewardItem = (item : MenuItem, originalId : string) => {
        if(!restaurant || !restaurant.rewardItems) return; 
        const index = restaurant?.rewardItems?.findIndex((i) => i.id === originalId); 
        if(!index || index  < 0) return; 
        restaurant.rewardItems[index] = item; 
    }
    
    const removeCategory = (id : string) => {
        restaurant.menu = restaurant?.menu?.filter((i) => i.id === id); 
    }
    
    const handleRemoveRewardItem = (id : string) => {
        if(restaurant?.menu?.findIndex((i) => i.id === id)) return; 
        restaurant.rewardItems = restaurant?.rewardItems?.filter((i) => i.id = id); 
    }
    
    return (
        <div>
            {!edit || !restaurant ? <form>
                <label>
                    Enter a restaurant JSON 
                </label>
                <input onChange={handleJson}/>
                <button onSubmit={() => setEdit(true)}>
                    Edit
                </button>
            </form> : 
            <div style={{flexDirection: 'column'}}>
                <text style={{fontSize: 20}}>{restaurant.name}</text>
                <text style={{fontSize: 16}}>{restaurant.id}</text>
                <text style={{fontSize: 18}}>Menu</text>
                <div>
                    {restaurant.menu?.map((category) => 
                    <MenuCategoryRow category={category} 
                                    updateRestaurant={updateRestaurant}
                                    removeCategory={removeCategory}/>)}
                </div>
                        
                <text style={{fontSize: 18}}>Reward Items</text>
                <div>
                    {restaurant.rewardItems?.map((rewardItem) => 
                    <MenuItemRow item={rewardItem} 
                                updateMenuCategory={updateRewardItem} 
                                removeItem={handleRemoveRewardItem}/>)}
                </div>
                
                <div>
                    <text>Result</text> 
                    <input defaultValue={JSON.stringify(restaurant)} readOnly={true}/>
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
}
const MenuCategoryRow = ({category, updateRestaurant, removeCategory} : MenuCategoryRowProps) => {
    let newCategory : MenuCategory = JSON.parse(JSON.stringify(category));
    const [enabled, setEnabled] = useState(false);
    const handleEditItem = (item, originalId) => {
        const index = newCategory.menuItems.findIndex((i) => i.id === originalId); 
        if(index  < 0) return; 
        newCategory.menuItems[index] = item; 
        updateRestaurant(newCategory, category.id);
    }
    const handleCreateItem = () => {
        const newMenuItem : MenuItem = {
           name: "PLACEHOLDER", 
           price: 0, 
           taxRate: 0, 
           id: "", 
        }; 
        newCategory.menuItems.push(newMenuItem);
        updateRestaurant(newCategory, category.id); 
    }
    
    const handleRemoveItem = (id : string) => {
        newCategory.menuItems = newCategory.menuItems.filter((i) => i.id === id);
        updateRestaurant(newCategory, category.id);
    }
    
    return (
        <div>
            <div style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <text>{newCategory.name}</text>
                <button onSubmit={() => setEnabled(true)}>Edit</button>
                <button onSubmit={() => removeCategory(category.id)}>Delete Category</button>
            </div>
            {enabled && <div style={{flexDirection: 'column', width: '100%'}}>
                <label>Category Name</label>
                <input defaultValue={newCategory.name} onChange={(event) => {newCategory.name = event.currentTarget.value}}/>
                <label>ID</label>
                <input defaultValue={newCategory.id} onChange={(event) => {newCategory.id = event.currentTarget.value}}/>
                <text>Items</text>
                <div>
                    {newCategory.menuItems.map((item) => (
                        <MenuItemRow item={item} 
                                    updateMenuCategory={handleEditItem}
                                    removeItem={handleRemoveItem} />
                    ))}
                </div>
                <button onSubmit={handleCreateItem}>Add item</button>
                <button onSubmit={() => updateRestaurant(newCategory, category.id)}>Save</button>
            </div>}
        </div>
        
    );
}

type MenuItemRowProps = {
    item: MenuItem; 
    updateMenuCategory: (item : MenuItem, originalId: string) => void; 
    removeItem: (id : string) => void; 
}
const MenuItemRow = ({item, updateMenuCategory, removeItem} : MenuItemRowProps) => {
    let newMenuItem : MenuItem = JSON.parse(JSON.stringify(item));
    const [enabled, setEnabled] = useState(false);
    const [isReward, setIsReward] = useState(false);
    const enableRewardItem = (b : boolean) => {
        newMenuItem.reward = b ? {
            discount: 0, 
            discountText: '', 
            points: 1, 
        } : undefined; 
        setIsReward(b);
    }
    return (
        <div>
            <div style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <text>{newMenuItem.name}</text>
                <button onSubmit={() => setEnabled(true)}>Edit</button>
                <button onSubmit={() => removeItem(item.id)}>Delete Item</button>
            </div>
            {enabled && <div style={{flexDirection: 'column', width: '100%'}}>
                <label>Item Name</label>
                <input defaultValue={newMenuItem.name} onChange={(event) => {newMenuItem.name = event.currentTarget.value}}/>
                <label>ID</label>
                <input defaultValue={newMenuItem.id} onChange={(event) => {newMenuItem.id = event.currentTarget.value}}/>
                <label>Description</label>
                <input defaultValue={newMenuItem.description} onChange={(event) => {newMenuItem.description = event.currentTarget.value}}/>
                <label>Image</label>
                <input defaultValue={newMenuItem.image} onChange={(event) => {newMenuItem.image = event.currentTarget.value}}/>
                <label>Is Alcohol</label>
                <input defaultValue={newMenuItem.isAlcohol?.toString()} onChange={(event) => {newMenuItem.isAlcohol = event.currentTarget.value === 'true'}}/>
                <label>Price</label>
                <input defaultValue={newMenuItem.price} onChange={(event) => {newMenuItem.price = +event.currentTarget.value}}/>
                <label>Tax Rate</label>
                <input defaultValue={newMenuItem.taxRate} onChange={(event) => {newMenuItem.taxRate = +event.currentTarget.value}}/>
                <label>Reward Item</label>
                <input type='checkbox' checked={isReward} onChange={(event) => enableRewardItem(!isReward)}></input>
                {isReward && <div>
                    <label>Discount</label>
                    <input defaultValue={newMenuItem.reward?.discount} onChange={(event) => {newMenuItem.reward.discount = +event.currentTarget.value}}/>
                    <label>Discount Text</label>
                    <input defaultValue={newMenuItem.reward?.discountText} onChange={(event) => {newMenuItem.reward.discountText = event.currentTarget.value}}/>
                    <label>Points</label>
                    <input defaultValue={newMenuItem.reward?.points} onChange={(event) => {newMenuItem.reward.points = +event.currentTarget.value}}/>
                </div>}
                
                <button onSubmit={() => updateMenuCategory(newMenuItem, item.id)}>Save</button>
            </div>}
        </div>
    );
}
