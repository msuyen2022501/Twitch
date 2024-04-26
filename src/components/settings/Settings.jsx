import { useChannelSettings } from "../../shared/hooks";
import { ChannelSettings } from "../channel/ChannelSettings";
import { LoadingSpinner} from '../LoadingSpinner'
import { PasswordSettings } from "./passwordSettings";
import { StreamKey } from "./StreamKey";

export const Settings = () => {
    const { channelSettings, isFetching, saveSettings} = useChannelSettings()

    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings settings={channelSettings} saveSettings={saveSettings}/>
            <PasswordSettings/>
            <StreamKey streamKey={channelSettings.streamKey}/>
        </div>
    )
}