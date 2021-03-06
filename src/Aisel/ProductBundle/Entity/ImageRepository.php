<?php

namespace Aisel\ProductBundle\Entity;

use Doctrine\ORM\EntityRepository;

/**
 * ImageRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ImageRepository extends EntityRepository
{

    /**
     * Get pages based on limit, current pagination and search query
     *
     * @param int $productId
     *
     * @return boolean $result
     */
    public function removeImageForProduct($productId)
    {

        $query = $this->getEntityManager()->createQueryBuilder();
        $result = $query
            ->delete('AiselProductBundle:Image', 'i')
            ->where('i.product = :id')->setParameter('id', $productId)
            ->getQuery()
            ->execute();

        return $result;
    }

}
