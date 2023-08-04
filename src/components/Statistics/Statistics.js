import PropTypes from 'prop-types';
import { getRandomHexColor } from './GetRandomColor';
import { Label, Percentage, StatItem, StatList, Title } from './Statistics.styled';

export const Statistics = ({title,stats}) => {
   return <section class="statistics">
       {title &&<Title>{title}</Title>} 
        <StatList>
           {stats.map(({ id, label, percentage }) => {
               return <StatItem key={id} style={{ backgroundColor:getRandomHexColor()}}>
                  <Label> { label} </Label>
                  <Percentage> { percentage}% </Percentage>
    </StatItem>  
           })}
              
            
    
</StatList></section>
}
 
Statistics.propTypes = {
    stats:PropTypes.array,
    title:PropTypes.string,
}
