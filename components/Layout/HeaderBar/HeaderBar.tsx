import React from 'react';
import Link from 'next/link';
import { style } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StyledButton from '../../Base/Button';
import SaveChangeButton from '../../Base/SaveChangeButton';
import Image from 'next/image';
import UploadSvg from '../../../assets/svg/a.svg';

import styles from './HeaderBar.module.scss';

const Header = () => (
    <div className= {styles.flexNone}>
        <div className= {`${styles.textWhite} ${styles.headerContainer}`}>
            <Link href={'/studio/saved'} className= {`${styles.textWhite}`}>
                <ArrowBackIcon/>
            </Link>
            <div>
                <h1 className= {`${styles.textWhite} ${styles.fontMedium}`}>Default Wall of Love</h1>
            </div>
            <div className= {styles.flexGrow} />
            <StyledButton>
                <div className= {`${styles.flex} ${styles.itemsCenter} ${styles.gap2}`}>
                      <div className= {`${styles.fontNormal} ${styles.textWhite80}`}>
                        https://senja.io/p/love/testimonials
                    </div>
                    <Image style={{color: '#fffc'}} src = {UploadSvg} alt = {'Avatar'} />
                </div>
            </StyledButton>
            <SaveChangeButton>
                <div className= {`${styles.relative} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}>
                    <div className= {`${styles.duration100}`}>
                        <div className= {`${styles.flex} ${styles.itemsCenter} ${styles.gap2}`}>
                            <div className={styles.fontMedium} style = {{fontSize: '14px'}}>Save changes</div>
                        </div>
                    </div>
                </div>
            </SaveChangeButton>
        </div>
    </div>
)

export default Header;
  