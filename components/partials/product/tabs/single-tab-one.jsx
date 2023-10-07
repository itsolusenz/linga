import React from 'react';
import ALink from '../../../common/ALink';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js'
//import { I18n } from 'i18n-js';
import en from '../../../../pages/Language/en';
import ta from '../../../../pages/Language/ta';
//const I18n = require('i18n-js');

export default function SingleTabOne ( props ) {
    const { adClass = "", product } = props;
   
   // const { t} = useTranslation('common');
    //i18n.changeLanguage("ta");
    
    function activeHandler ( e ) {
        e.preventDefault();
        document.querySelector( '.add-product-review .active' ) && document.querySelector( '.add-product-review .active' ).classList.remove( 'active' );
        e.currentTarget.classList.add( 'active' );
    }
    
    const translations = {
        en: { welcome: 'Hello',
        Referrer: 'Referrer',
        Name: 'Name', 
        First: 'First',
        Last: 'Last',
        Type: 'Type',
        Status: 'Status ',
        Organization:'Organization',
        Designation:'Designation',
        Flat:'Flat',
        'House no':'House no', Building:'Building',  Company:'Company', Apartment:'Apartment', 'Area':'Area',  Street:'Street',
         Sector:'Sector', Village:'Village', Landmark:'Landmark',State:'State',City:'City', Postcode:'Postcode', Country:'Country',
         Phone:'Phone',Phone:'Phone',Work:'Work',Private:'Private','Mobile no':'Mobile no',Email:'Email',Website:'Website',whatsApp:'whatsApp',Facebook:'Facebook',Url:'url',
         Twitter :'Twitter',Linkedin:'Linkedin',Instagram:'Instagram',Youtube:'Youtube',About :'About',Content:'Content',Profile :'Profile',Image:'Image',
         Info :'Info' ,'Social Media':'Social Media',
         'Others':'Others',
         'Submit':'Submit',Personal :'Personal',Contact :'Contact'
        },
         

        ta: { 
        Referrer: 'பரிந்துரைப்பவர்',
        Name: 'பெயர்', 
        First: 'முதல்',
        Last: 'கடைசி',
        Type: 'வகை',
        Status: 'நிலை ',
        Organization:'அமைப்பு',
        Designation:'பதவி',
        Flat:'பிளாட்',
        'House no':'வீடு எண்', Building:'கட்டிடம்',  Company:'நிறுவனம்', Apartment:'அடுக்குமாடி இல்லங்கள்', 'Area':'பகுதி',  Street:'தெரு',
         Sector:'துறை', Village:'கிராமம்', Landmark:'மைல்கல்',State:'நிலை',City:'நகரம்', Postcode:'அஞ்சல் குறியீடு', Country:'நாடு',
         Phone:'தொலைபேசி',phone:'தொலைபேசி',Work:'வேலை',Private:'தனியார்','Mobile no':'அலைபேசி எண்',Email:'மின்னஞ்சல்',Website:'இணையதளம்',whatsApp:'பகிரி',Facebook:'முகநூல்',Url:'முகவரி',
         Twitter :'ட்விட்டர்',Linkedin:'லிங்டின்',Instagram:'இன்ஸ்டாகிராம்',Youtube:'வலைஒளி',About :'பற்றி',Content:'உள்ளடக்கம்',Profile :'சுயவிவரம்',Image:'படம்',
         Info :'தகவல்' ,'Social Media':'சமூக ஊடகம்','Others':'மற்றவைகள்',
         'Submit':'சமர்ப்பிக்கவும்',Personal :'தனிப்பட்ட',Contact :'தொடர்பு'
    
          },
      };
     /* const i18n = new I18n(translations);
      i18n.locale = 'ta';*/
    return (
        <>
            <div className="skel-pro-tabs"></div>
            {
                product &&
                <Tabs className={ `product-single-tabs ${adClass}` } selectedTabClassName="active" selectedTabPanelClassName="show">
                    <TabList className="nav nav-tabs">
                        <Tab className="nav-item">
                            <ALink href="#" className="nav-link">Description</ALink>
                        </Tab>
                        <Tab className="nav-item">
                            <ALink href="#" className="nav-link">Additional Information</ALink>
                        </Tab>
                        <Tab className="nav-item">
                            <ALink href="#" className="nav-link">Safety Information</ALink>
                        </Tab>
                        <Tab className="nav-item">
                            <ALink href="#" className="nav-link">Legal Information</ALink>
                        </Tab>
                       {/*} <Tab className="nav-item">
                            <ALink href="#" className="nav-link">Reviews ({ product.reviews })</ALink>
            </Tab>*/}
                    </TabList>

                    <TabPanel className="tab-pane fade">
                        <div className="product-desc-content">
                            <p>{ product.itemdesc }</p>
                              </div>
                    </TabPanel>


                    <TabPanel className="tab-pane fade">
                   
                       <div className="product-size-content">
                            <div className="row">
                               
                                <div className="col-md-8">
                                   <table className="table table-size">
                                        {/*} <thead>
                                            <tr>
                                                <th>SIZE</th>
                                                <th>CHEST (in.)</th>
                                                <th>WAIST (in.)</th>
                                                <th>HIPS (in.)</th>
                                            </tr>
        </thead>*/}               
                                        <tbody>

                                            { product.add_details.map((a,i)=>

                                                            <tr key={i}>
                                                            <td>{a.adcolumn}</td>
                                                            <td>{a.advalue}</td>
                                                           
                                                            </tr>

                                            )}
                                           
                                           
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    
                    <TabPanel className="tab-pane fade">
                    <div className="product-desc-content">
                    
                            <div dangerouslySetInnerHTML={{ __html: `${product.safetyinfo}`}}/>      
                             
                    </div>
                       
                    </TabPanel>
                    <TabPanel className="tab-pane fade">
                    <div className="product-desc-content">
                            <p>{ product.legaldisclaimer }</p>
                    </div>
                       {/*} <table className="table table-striped mt-2">
                            <tbody>
                                <tr>
                                    <th>Weight</th>
                                    <td>23 kg</td>
                                </tr>

                                <tr>
                                    <th>Dimensions</th>
                                    <td>12 × 24 × 35 cm</td>
                                </tr>

                                <tr>
                                    <th>Color</th>
                                    <td>Black, Green, Indigo</td>
                                </tr>

                                <tr>
                                    <th>Size</th>
                                    <td>Large, Medium, Small</td>
                                </tr>
                            </tbody>
                    </table>*/}
                    </TabPanel>

                  {/*}  <TabPanel className="tab-pane fade">
                        <div className="product-reviews-content">
                            {
                                product.reviews !== 0 ?
                                    <>
                                        <h3 className="reviews-title">1 review for Men Black Sports Shoes</h3>

                                        <div className="comment-list">
                                            <div className="comments">
                                                <figure className="img-thumbnail">
                                                    <img src="images/blog/author.jpg" alt="author" width="80"
                                                        height="80" />
                                                </figure>

                                                <div className="comment-block">
                                                    <div className="comment-header">
                                                        <div className="comment-arrow"></div>

                                                        <div className="ratings-container float-sm-right">
                                                            <div className="product-ratings">
                                                                <span className="ratings" style={ { width: `${20 * product.ratings}%` } }></span>
                                                                <span className="tooltiptext tooltip-top">{ product.ratings.toFixed( 2 ) }</span>
                                                            </div>
                                                        </div>

                                                        <span className="comment-by">
                                                            <strong>Joe Doe</strong> – April 12, 2018
                                                        </span>
                                                    </div>

                                                    <div className="comment-content">
                                                        <p>Excellent.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <h3 className="reviews-title">Review</h3>
                                        <p>There are no reviews yet.</p>
                                    </>
                            }

                            <div className="divider"></div>

                            <div className="add-product-review">
                                <div className="add-product-review">
                                    <h3 className="review-title">Add a review</h3>

                                    <form action="#" className="comment-form m-0">
                                        <div className="rating-form">
                                            <label htmlFor="rating">Your rating <span className="required">*</span></label>
                                            <span className="rating-stars">
                                                <a className="star-1" href="#" onClick={ activeHandler }>1</a>
                                                <a className="star-2" href="#" onClick={ activeHandler }>2</a>
                                                <a className="star-3" href="#" onClick={ activeHandler }>3</a>
                                                <a className="star-4" href="#" onClick={ activeHandler }>4</a>
                                                <a className="star-5" href="#" onClick={ activeHandler }>5</a>
                                            </span>
                                        </div>

                                        <div className="form-group">
                                            <label>Your review <span className="required">*</span></label>
                                            <textarea cols="5" rows="6" className="form-control form-control-sm"></textarea>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-6 col-xl-12">
                                                <div className="form-group">
                                                    <label>Name <span className="required">*</span></label>
                                                    <input type="text" className="form-control form-control-sm" required />
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-xl-12">
                                                <div className="form-group">
                                                    <label>Email <span className="required">*</span></label>
                                                    <input type="text" className="form-control form-control-sm" required />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                        id="save-name" />
                                                    <label className="custom-control-label mb-0" htmlFor="save-name">Save my
                                                    name, email, and website in this browser for the next time I
														comment.</label>
                                                </div>
                                            </div>
                                        </div>

                                        <input type="submit" className="btn btn-primary" value="Submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </TabPanel>*/}
                </Tabs>
            }
        </>
    );
}

