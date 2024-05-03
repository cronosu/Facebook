"use client";

import { useState } from "react";

export default function Service({ image, name }) {
    const [voirPlus, setVoirPlus] = useState(false);

    return (
        <div className=" h-full flex flex row  font-semibold w-1/5">
            <div className="bg-neutral-900 w-full pl-2 pt-4 overflow-hidden hover:overflow-auto ">
                <div className="flex  flex-col flex-start text-white pb-3">
                    <div className="gap-2 flex hover:bg-neutral-700/60 p-2 pl-[10px] rounded-lg cursor-pointer ">
                        <img className="rounded-[50px] object-cover  size-9" src={image} />
                        <p className="flex self-center ">{name}</p>
                    </div>

                    <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                        <div className="size-10 bg-[center_top_-255px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')]">
                        </div>
                        <p className="flex self-center"> Ami(e)s</p>
                    </div>

                    <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                        <img className="rounded-[50px] size-10" src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png" />
                        <p className="flex self-center"> Fils</p>
                    </div>

                    <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                        <div className="size-10 bg-[center_top_-110px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')]">
                        </div>
                        <p className="flex self-center"> Pages</p>
                    </div>

                    <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                        <div className="size-10 bg-[center_top_-405px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')]">
                        </div>
                        <p className="flex self-center"> Souvenirs</p>
                    </div>

                    <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                        <div className="size-10 bg-[center_top_-33px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')]">
                        </div>
                        <p className="flex self-center">Groupes</p>
                    </div>
                    {voirPlus &&
                        <>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10  bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/x2_LFd7gCqg.png')]">
                                </div>
                                <p className="flex self-center">Activité publicitaire récente</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10 bg-[center_top_1px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png')]">
                                </div>
                                <p className="flex self-center">Centre de climatologie</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer items-center">
                                <div className="size-10 bg-[center_top_-293px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')]">
                                </div>
                                <p className="flex self-center">Collectes de fons</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10 bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png')]">
                                </div>
                                <p className="flex self-center">Commandes et paiements</p>
                            </div>
                            <div className=" gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer ">
                                <div className="size-10 bg-[center_top_-145px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')] ">
                                </div>
                                <p className="flex self-center">Enregistrements</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10 bg-[center_top_-480px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/vTDQ3deAsEh.png')]">
                                </div>
                                <p className="flex self-center">Évenements</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10 bg-[center_top_0px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/ATlxuj_J5ty.png')]">
                                </div>
                                <p className="flex self-center">Gestionnaire de publicités</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10 bg-[center_top_-480px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')]">
                                </div>
                                <p className="flex self-center">Groupes</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10 bg-[center_top_-71px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')]">
                                </div>
                                <p className="flex self-center">Jouer à des jeux</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10 bg-[center_top_-885px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')]">
                                </div>
                                <p className="flex self-center">Marketplace</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10 bg-[center_top_-1px] h-[32px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/gLFTur-DqkV.png')]">
                                </div>
                                <p className="flex self-center">Messenger</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className=" border border-solid border-neutral-700/60 rounded-lg p-0 size-9 bg-[center_top_-1px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/xjjUm0K8VyX.png')]">
                                </div>
                                <p className="flex self-center">Meta Business Suite</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10 bg-[center_top_3px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/vTDQ3deAsEh.png')]">
                                </div>
                                <p className="flex self-center">Meta  Quest</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10 bg-[center_top_-480px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png')]">
                                </div>
                                <p className="flex self-center"> Video</p>
                            </div>
                            <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded-lg cursor-pointer">
                                <div className="size-10 bg-[center_top_3px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/fGWbDwbx9W4.png')]">
                                </div>
                                <p className="flex self-center">Vidéos de gaming</p>
                            </div>
                        </>
                    }
                    <div onClick={() => setVoirPlus(!voirPlus)} className=" gap-2 flex hover:bg-neutral-700/60 p-2 pl-[11px] rounded-lg cursor-pointer">
                        <div className={` rounded-[50px] size-[35px] flex items-center justify-center bg-neutral-800 ${voirPlus && "rotate-180 pt-[3px]"}`}>


                            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true"  ><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
                        </div>


                        {voirPlus ?
                            <button className="flex self-center pt-1 ">Voir Moins</button> :
                            <button className="flex self-center pt-1 ">Voir Plus</button>}
                    </div>
                </div>

                <div className="w-full text-white p-2 pt-4 border-t-[2px] border-neutral-600 border-solid select-none font-normal mb-1">
                    Vos raccourcis
                </div>



                <div className="flex  flex-col flex-start text-white ">


                    <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded">
                        <img className="rounded-[50px] object-cover size-10" src={image} />
                        <p className="flex self-center pt-1">Exemple de lien</p>
                    </div>

                    <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded">
                        <img className="rounded-[50px] object-cover size-10" src={image} />
                        <p className="flex self-center pt-1">Exemple de lien</p>
                    </div>

                    <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded">
                        <img className="rounded-[50px] object-cover size-10" src={image} />
                        <p className="flex self-center pt-1">Exemple de lien</p>
                    </div>

                    <div className="gap-2 flex hover:bg-neutral-700/60 p-2 rounded">
                        <img className="rounded-[50px] object-cover size-10" src={image} />
                        <p className="flex self-center pt-1">Exemple de lien</p>
                    </div>

                </div>
            </div>
        </div>

    )
}